function passwordValidation() {
    var password = document.getElementById("password-verify").value;
    var confirmPassword = document.getElementById("password-verify2").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
