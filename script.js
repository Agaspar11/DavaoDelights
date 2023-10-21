// Input fields

document.querySelector("form").addEventListener("submit", function (event) {
  
    const firstName = document.getElementById("Firstname");
    const lastName = document.getElementById("Lastname");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const number = document.getElementById("number");
    const place = document.getElementById("place");
    const message = document.getElementById("message");

    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      email.value.trim() === "" ||
      date.value.trim() === "" ||
      number.value.trim() === "" ||
      place.value === "Select Place to Explore" ||
      message.value.trim() === ""
    ) {
      event.preventDefault();
      
      alert("Please fill out all required fields.");
    }
  });

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

