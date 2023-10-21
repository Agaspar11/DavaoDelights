//   Subscribe footer section

const inputElement = document.querySelector(".inputs input");
  const buttonElement = document.querySelector(".inputs button");

  buttonElement.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = inputElement.value;

    if (inputValue.includes("@gmail.com")) {
      alert("You've subscribed with the email address: " + inputValue + ". You will be updated on our latest posts.");
    } else {
      alert("You've enter an invalid email, please input the valid email using 'example.user@gmail.com'");
    }

    inputElement.value = "";
  });

