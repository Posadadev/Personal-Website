$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    $("#nameError").text("");
    $("#emailError").text("");
    $("#messageError").text("");
    $("#formSuccess").text("");

    if (name === "") {
      $("#nameError").text("Please enter your name.");
      isValid = false;
    }
    if (email === "") {
      $("#emailError").text("Please enter your email.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      $("#emailError").text("Please enter a valid email address");
      isValid = false;
    }
    if (message === "") {
      $("#messageError").text("Please enter a message.");
      isValid = false;
    } else if (message.length < 10) {
      $("#messageError").text("Messge must be at least 10 characters long.");
      isValid = false;
    }
    if (isValid) {
      $("#formSuccess").text("Your message has been submitted successfully!");
      $("#contactForm")[0].reset();
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
