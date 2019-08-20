function validateForm() {
  let name = document.contactForm.name.value;
  let adress = document.contactForm.adress.value;
  let email = document.contactForm.email.value;
  let password = document.contactForm.password.value;
  let regex1 = /^\S+@\S+\.\S+$/;
  let validation = false;
  while (!validation) {
    if (name == "") {
      alert("Please enter your name");
      break;
    }
    if (adress.length === 0) {
      alert("Please enter your adress");
      break;
    }
    if (email == "") {
      alert("Please enter your email address");
      break;
    } else if (regex1.test(email) === false) {
      alert("Please enter a valid email address");
      break;
    }
    if (password === "") {
      alert("Please enter your password");
      break;
    } else if (password.length < 8) {
      alert("Password must contain at least eight characters!");
      break;
    } else if (/[0-9]/.test(password) === false) {
      alert("password must contain at least one number (0-9)!");
      break;
    } else if (/[A-Z]/.test(password) === false) {
      alert("password must contain at least one uppercase letter (A-Z)!");
      break;
    } else if (/[a-z]/.test(password) === false) {
      alert("password must contain at least one lowercase letter (a-z)!");
      break;
    }
    validation = true;
  }
  if (validation) {
    confirm("Are you sure !");
  }
}

document.getElementById("send").addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
});
function resetForm() {
  event.preventDefault();
  document.contactForm.name.value = "";
  document.contactForm.adress.value = "";
  document.contactForm.email.value;
  document.contactForm.password.value = "";
  document.contactForm.comments.value = "";
}
