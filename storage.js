function saveReplacements(replacements, callback) {
  chrome.storage.sync.set({ replacements }, () => {
    if (callback) callback();
  });
}

function loadReplacements(callback) {
  chrome.storage.sync.get("replacements", (data) => {
    callback(data.replacements || []);
  });
} 