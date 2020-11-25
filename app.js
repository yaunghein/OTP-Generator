const getOTP = (length = 6, option = {}) => {
  const input = document.getElementById("input-number");
  if (input.value === "") {
    alert("Enter a number!");
    return false;
  }

  const numbers = "0123456789";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = alphabet.toUpperCase();
  const specialChars = "!@#$%^&*()";

  let defaultOptions = {
    numbers: true,
    alphabet: true,
    upperCase: true,
    specialChars: true,
  };

  let update_options = { ...defaultOptions, ...option };
  let allowChars = update_options.numbers ? numbers : "";
  allowChars += update_options.alphabet ? alphabet : "";
  allowChars += update_options.upperCase ? upperCase : "";
  allowChars += update_options.specialChars ? specialChars : "";

  let OTP = "";
  while (OTP.length < length) {
    let random_number = Math.random();
    let char_index = Math.floor(random_number * (allowChars.length - 1));
    OTP += allowChars[char_index];
  }
  document.getElementById("result").innerText = OTP;
};
