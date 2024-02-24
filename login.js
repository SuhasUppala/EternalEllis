function b1() {
    // Get the values of the input fields
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;

    // Simple validation - You can replace this with your actual authentication logic
    if (username === "Suhas1805" && password === "Close-the-eye") {
        // If credentials are valid, navigate to main.html
        window.location.href = "main.html";
    } else {
        // If credentials are not valid, you can display an error message or take other actions
        console.log("Invalid credentials. Please try again.");
    }
}