/* Blueprint site interactions — vanilla JS, no dependencies.
   Handles: hash-routed section switching, sidebar highlight, mobile menu,
   tabs, accordions, and animated bar fills. */

(function () {
  "use strict";

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var sections = Array.prototype.slice.call(document.querySelectorAll(".section"));
  var sidebar  = document.querySelector(".sidebar");
  var backdrop = document.querySelector(".backdrop");

  function showSection(id) {
    var found = false;
    sections.forEach(function (s) {
      var on = s.id === id;
      s.classList.toggle("active", on);
      if (on) found = true;
    });
    if (!found && sections.length) {
      sections[0].classList.add("active");
      id = sections[0].id;
    }
    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
    // reset scroll & animate bars in the newly shown section
    window.scrollTo({ top: 0, behavior: "auto" });
    animateBars(document.getElementById(id));
    closeMenu();
  }

  function routeFromHash() {
    var id = (location.hash || "").replace(/^#/, "") || (sections[0] && sections[0].id);
    showSection(id);
  }

  window.addEventListener("hashchange", routeFromHash);

  /* ---------- Mobile menu ---------- */
  function openMenu()  { if (sidebar) sidebar.classList.add("open"); if (backdrop) backdrop.classList.add("show"); }
  function closeMenu() { if (sidebar) sidebar.classList.remove("open"); if (backdrop) backdrop.classList.remove("show"); }

  var burger = document.querySelector(".hamburger");
  if (burger) burger.addEventListener("click", function () {
    if (sidebar && sidebar.classList.contains("open")) closeMenu(); else openMenu();
  });
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  /* ---------- Tabs (event delegation) ---------- */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest(".tab");
    if (!tab) return;
    var group = tab.closest(".tabgroup");
    if (!group) return;
    var target = tab.getAttribute("data-tab");
    group.querySelectorAll(".tab").forEach(function (t) {
      t.classList.toggle("active", t === tab);
    });
    group.querySelectorAll(".tabpane").forEach(function (p) {
      var on = p.getAttribute("data-pane") === target;
      p.classList.toggle("active", on);
      if (on) animateBars(p);
    });
  });

  /* ---------- Accordions ---------- */
  document.addEventListener("click", function (e) {
    var head = e.target.closest(".acc-head");
    if (!head) return;
    var acc = head.closest(".acc");
    if (acc) acc.classList.toggle("open");
  });

  /* ---------- Animated bar fills ---------- */
  function animateBars(root) {
    if (!root) return;
    root.querySelectorAll(".bar-fill[data-w]").forEach(function (el) {
      var w = el.getAttribute("data-w");
      el.style.width = "0%";
      // next frame -> transition to target
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.transition = "width .8s cubic-bezier(.22,1,.36,1)";
          el.style.width = w + "%";
        });
      });
    });
  }

  /* ---------- init ---------- */
  routeFromHash();
})();
