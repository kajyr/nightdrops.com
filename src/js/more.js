(function () {
  document.querySelectorAll("[data-show]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      console.log("clicked");
      const contentId = btn.getAttribute("data-show");
      const elem = document.getElementById(contentId);
      if (elem) {
        elem.classList.remove("hidden");
        // Force a browser reflow so opacity transition can apply
        void elem.offsetWidth;
        elem.classList.add("visible");
      }
    });
  });
})();
