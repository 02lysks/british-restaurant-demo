const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "Thank you, we will contact you soon.";
  bookingForm.reset();
});
