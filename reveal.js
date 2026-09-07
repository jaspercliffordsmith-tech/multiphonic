/* Multiphonic, shared progressive-enhancement layer.
   Content is visible by default. This script only ever hides an element at the
   moment it starts observing it, re-adopts orphaned nodes, and polls so that
   anything on screen is shown even if an observer callback is missed. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = null;
  if (!reduce && "IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.setAttribute("data-reveal", "in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  }

  function sweep() {
    var nodes = document.querySelectorAll('[data-reveal]:not([data-reveal="in"])');
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!io) { n.setAttribute("data-reveal", "in"); continue; }
      var b = n.getBoundingClientRect();
      if (b.top < window.innerHeight * 0.95 && b.bottom > -1) {
        n.setAttribute("data-reveal", "in");
        continue;
      }
      n.setAttribute("data-reveal", "off");
      io.observe(n);
    }
  }

  var frames = 0;
  function tick() { sweep(); if (++frames < 90) requestAnimationFrame(tick); }
  tick();
  setInterval(sweep, 350);

  function navState() {
    var el = document.querySelector("[data-nav]");
    if (!el) return;
    var hero = document.getElementById("top");
    var h = hero && hero.offsetHeight ? hero.offsetHeight : window.innerHeight;
    el.setAttribute("data-nav", window.scrollY > (h - 90) ? "show" : "hide");
  }
  window.addEventListener("scroll", navState, { passive: true });
  setInterval(navState, 350);
  navState();
})();
