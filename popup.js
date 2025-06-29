function createRuleRow(find = "", replace = "") {
  const row = document.createElement("div");
  row.className = "rule";

  row.innerHTML = `
    <input type="text" class="find" value="${find}" placeholder="Find (e.g. Evan)" />
    <input type="text" class="replace" value="${replace}" placeholder="Replace (e.g. Name)" />
    <button class="remove">X</button>
  `;

  row.querySelector(".remove").onclick = () => {
    row.remove();
    saveCurrentRules();
  };

  row.querySelector(".find").oninput = saveCurrentRules;
  row.querySelector(".replace").oninput = saveCurrentRules;

  return row;
}

function saveCurrentRules() {
  const rules = [];
  document.querySelectorAll(".rule").forEach((row) => {
    const find = row.querySelector(".find").value.trim();
    const replace = row.querySelector(".replace").value.trim();
    if (find) rules.push({ find, replace });
  });
  saveReplacements(rules);
}

document.getElementById("add").addEventListener("click", () => {
  const row = createRuleRow();
  document.getElementById("rules").appendChild(row);
});

document.addEventListener("DOMContentLoaded", () => {
  loadReplacements((rules) => {
    const container = document.getElementById("rules");
    container.innerHTML = "";
    rules.forEach(({ find, replace }) => {
      const row = createRuleRow(find, replace);
      container.appendChild(row);
    });
  });
}); 