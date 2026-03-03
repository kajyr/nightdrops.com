(function () {
  function reveal(btn) {
    const contentId = btn.getAttribute("data-show");
    const elem = document.getElementById(contentId);
    if (!elem) return;

    elem.classList.remove("hidden");
    // Force a browser reflow so the opacity transition can apply
    void elem.offsetWidth;
    elem.classList.add("visible");

    btn.setAttribute("aria-expanded", "true");

    // Move focus to revealed content so keyboard/AT users reach it
    elem.setAttribute("tabindex", "-1");
    elem.focus({ preventScroll: false });
  }

  document.querySelectorAll("[data-show]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      reveal(btn);
    });

    // Keyboard activation for role="button" elements (span, div, etc.)
    if (btn.getAttribute("role") === "button") {
      btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          reveal(btn);
        }
      });
    }
  });
})();
