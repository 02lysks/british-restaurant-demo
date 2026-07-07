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
      "This previews the booking flow. A final website can send guests to Rustique's real booking process.";
    bookingForm.reset();
  });
}
