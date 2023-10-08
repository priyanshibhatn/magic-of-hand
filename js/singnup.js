function showSignup() {
    document.getElementById("signupModal").style.display = "block";
    document.querySelector(".login-container").classList.add("hide-login");
  }

  function hideSignup() {
    document.getElementById("signupModal").style.display = "none";
    document.querySelector(".login-container").classList.remove("hide-login");
  }

  function validatePasswordAndRedirect() {
    const password = document.getElementById("password").value;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

    let missingRequirements = [];

    if (password.length < 8) {
      missingRequirements.push("At least 8 characters");
    }
    if (!uppercaseRegex.test(password)) {
      missingRequirements.push("At least 1 uppercase letter");
    }
    if (!lowercaseRegex.test(password)) {
      missingRequirements.push("At least 1 lowercase letter");
    }
    if (!digitRegex.test(password)) {
      missingRequirements.push("At least 1 digit");
    }
    if (!specialCharRegex.test(password)) {
      missingRequirements.push("At least 1 special character");
    }

    if (missingRequirements.length > 0) {
      document.getElementById("passwordRequirements").style.display = "block";
      document.getElementById("passwordRequirements").innerHTML =
        "Password must contain:<ul>" +
        missingRequirements.map(req => `<li>${req}</li>`).join("") +
        "</ul>";
      return false;
    }

    // Redirect to the specified page in a new tab
    window.open("./index.html", "_blank");
    return true;
  }