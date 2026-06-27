document.addEventListener("DOMContentLoaded", function () {
  const changeTextButton = document.getElementById("changeTextBtn");
  const domText = document.getElementById("domText");

  if (changeTextButton && domText) {
    changeTextButton.addEventListener("click", function () {
      domText.innerHTML =
        "Good job! This text changed because JavaScript used the DOM.";
      domText.style.color = "#198754";
      domText.style.fontSize = "22px";
      domText.style.backgroundColor = "#e9f7ef";
      domText.style.padding = "15px";
      domText.style.borderRadius = "10px";
      domText.style.border = "2px solid #198754";
    });
  }

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.innerHTML = "Please complete all required fields.";
        formMessage.style.color = "red";
      } else {
        formMessage.innerHTML =
          "Thank you, " + name + ". Your message was submitted successfully.";
        formMessage.style.color = "green";
        contactForm.reset();
      }
    });
  }
});