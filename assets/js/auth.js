function togglePassword() {
  var input = document.getElementById("password-confirmation");
  console.log(`${input.value}`);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}