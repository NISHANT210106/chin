document.addEventListener('DOMContentLoaded', function() {
    const secretCode = "chin tapak dum dum";
    const submitBtn = document.getElementById("submit-btn");
    const secretCodeInput = document.getElementById("secret-code");
    const loginContainer = document.getElementById("login-container");
    const videoContainer = document.getElementById("video-container");
    const secretVideo = document.getElementById("secret-video");

    function checkCode() {
        const userInput = secretCodeInput.value;
        console.log("Checking code:", userInput); // Debug log
        
        if (userInput === secretCode) {
            console.log("Correct code entered"); // Debug log
            loginContainer.style.display = "none";
            videoContainer.style.display = "block";
            secretVideo.play(); // Play the video automatically
        } else {
            console.log("Incorrect code entered"); // Debug log
            alert("Incorrect code. Please try again.");
        }
    }

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent any default form submission
        console.log("Submit button clicked"); // Debug log
        checkCode();
    });

    secretCodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent any default form submission
            console.log("Enter key pressed"); // Debug log
            checkCode();
        }
    });

    console.log("Script loaded and event listeners attached"); // Debug log
});
