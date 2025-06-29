function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

loadReplacements((rules) => {
  if (!rules.length) return;

  const applyReplacements = (text) => {
    let result = text;
    rules.forEach(({ find, replace }) => {
      const regex = new RegExp(escapeRegExp(find), "gi");
      result = result.replace(regex, replace);
    });
    return result;
  };

  const triggerInputEvent = (el) => {
    el.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const handleLiveInput = (el) => {
    if (el.dataset.llmHandled) return;
    el.dataset.llmHandled = "true";

    el.addEventListener("input", () => {
      const newValue = applyReplacements(el.value);
      if (newValue !== el.value) {
        const start = el.selectionStart;
        el.value = newValue;
        el.selectionStart = el.selectionEnd = start;
        triggerInputEvent(el); // Notify React/etc.
      }
    });

    el.addEventListener("paste", (e) => {
      const paste = (e.clipboardData || window.clipboardData).getData("text");
      if (!paste) return;

      e.preventDefault();
      const replaced = applyReplacements(paste);

      const start = el.selectionStart;
      el.setRangeText(replaced, start, el.selectionEnd, "end");
      triggerInputEvent(el);
    });
  };

  const attachToAllInputs = () => {
    const inputs = document.querySelectorAll("textarea, input[type='text']");
    inputs.forEach(handleLiveInput);
  };

  const observer = new MutationObserver(attachToAllInputs);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachToAllInputs);
  } else {
    attachToAllInputs();
  }

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}); 