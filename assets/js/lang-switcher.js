document.addEventListener("DOMContentLoaded", () => {
  const switchers = document.querySelectorAll("#lang-switcher");

  switchers.forEach((switcher) => {
    const button = switcher.querySelector("#lang-button");
    const menu = switcher.querySelector("#lang-menu");

    if (!button || !menu) return;

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      if (menu.contains("hidden")) {
        menu.classList.remove("hidden");
        return;
      }

      if (!menu.contains("hidden")) menu.classList.add("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("hidden") && !switcher.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });

    button.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) menu.classList.remove("hidden");
    });

    menu.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) menu.classList.add("hidden");
    });
  });
});
