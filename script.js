/* ═══════════════════════════════════════════
   PADELIA LANDING PAGE — JavaScript
   ═══════════════════════════════════════════ */

(function () {
  "use strict";

  // ─── Navbar scroll effect ───
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // ─── Mobile Menu ───
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileLinks = mobileMenu.querySelectorAll("a");
  let prevOverflow = "";

  function openMenu() {
    mobileMenu.classList.add("open");
    mobileOverlay.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus first link
    if (mobileLinks.length > 0) {
      setTimeout(function () { mobileLinks[0].focus(); }, 0);
    }
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    mobileOverlay.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = prevOverflow;
  }

  menuToggle.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileOverlay.addEventListener("click", closeMenu);

  // Close on Escape
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close on scroll
  window.addEventListener("scroll", function () {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  }, { passive: true });

  // Close when a mobile link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // ─── Reveal animations (Intersection Observer) ───
  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealElements = document.querySelectorAll(".reveal");

  if (!prefersReduced && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
          if (delay > 0) {
            setTimeout(function () {
              entry.target.classList.add("visible");
            }, delay);
          } else {
            entry.target.classList.add("visible");
          }
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion or no IntersectionObserver, show everything immediately
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // ─── Back to Top Button ───
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }, { passive: true });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ─── Stat Counters ───
  var statCounters = document.querySelectorAll(".stat-counter");

  function animateCounter(el) {
    var end = parseInt(el.getAttribute("data-end"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var numberEl = el.querySelector(".number");
    var duration = 2000;
    var frameId = null;

    if (prefersReduced) {
      numberEl.textContent = end + suffix;
      return;
    }

    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quartic
      var eased = 1 - Math.pow(1 - progress, 4);
      var current = Math.floor(eased * end);
      numberEl.textContent = current + suffix;
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    }

    frameId = requestAnimationFrame(step);

    // Store frameId for potential cleanup
    el._frameId = frameId;
  }

  if ("IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
          if (delay > 0) {
            setTimeout(function () {
              animateCounter(entry.target);
            }, delay);
          } else {
            animateCounter(entry.target);
          }
          counterObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    });

    statCounters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    // Fallback: show final values
    statCounters.forEach(function (el) {
      var end = parseInt(el.getAttribute("data-end"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      el.querySelector(".number").textContent = end + suffix;
    });
  }

})();
