// Projects page: switch between the mixed grid (default) and a grouped-by-category view.
(function () {
  var grid = document.getElementById("project-grid");
  var byCategory = document.getElementById("project-categories");
  var toggle = document.getElementById("project-view-toggle");
  if (!grid || !byCategory || !toggle) return;

  var CATEGORIES = [
    ["robotics", "Robotics & Autonomy"],
    ["electronics", "Electronics & Embedded Systems"],
    ["agri", "Agriculture & Environment"]
  ];
  var STORAGE_KEY = "projects-view";

  // Mixed order as authored; restored when switching back.
  var cards = Array.prototype.slice.call(grid.children);
  var buttons = toggle.querySelectorAll("button[data-view]");

  function showCategories() {
    byCategory.innerHTML = "";
    CATEGORIES.forEach(function (cat) {
      var heading = document.createElement("h2");
      heading.className = "category-heading";
      heading.textContent = cat[1];

      var section = document.createElement("div");
      section.className = "robot-grid";
      cards.forEach(function (card) {
        if (card.getAttribute("data-cat") === cat[0]) section.appendChild(card);
      });

      byCategory.appendChild(heading);
      byCategory.appendChild(section);
    });
    grid.hidden = true;
    byCategory.hidden = false;
  }

  function showMixed() {
    cards.forEach(function (card) { grid.appendChild(card); });
    byCategory.hidden = true;
    grid.hidden = false;
  }

  function setView(view, remember) {
    if (view === "category") showCategories(); else showMixed();
    document.body.classList.toggle("projects-by-category", view === "category");
    Array.prototype.forEach.call(buttons, function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-view") === view));
    });
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, view); } catch (e) { /* storage unavailable */ }
    }
  }

  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener("click", function () { setView(b.getAttribute("data-view"), true); });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
  toggle.hidden = false;
  setView(saved === "category" ? "category" : "mixed", false);
})();
