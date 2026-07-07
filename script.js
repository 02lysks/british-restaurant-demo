const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

if (bookingForm && formMessage) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent =
      "Thank you. This concept form shows where a real booking request would be sent.";
    bookingForm.reset();
  });
}
