console.log("Hiiiiii.....");

//Validating the Phone Number

function validaterPhone(num) {
  const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/g;

  let result = num.match(re);
  if (result) {
    console.log("The number is valid.");
  } else {
    let num = prompt("Enter number in XX-XXXXX-XXXXX format:");
    validaterPhone(num);
  }
}
let number = prompt("Enter a number XX-XXXXX-XXXXX");
validaterPhone(number);

// Validating the Email Address

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/g;
  let result = regex.test(email);
  if (result) {
    console.log("The email is valid.");
  } else {
    let newEmail = prompt("Enter a valid email:");
    validateEmail(newEmail);
  }
}
let email = prompt("Enter an Email:");
validateEmail(email);
