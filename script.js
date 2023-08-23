// Function to calculate the time difference in hours and minutes
function getTimeSinceOne() {
    const oneOClock = new Date();
    oneOClock.setHours(1, 0, 0, 0); // Set to 1 o'clock today

    const currentTime = new Date();
    const timeDiff = currentTime - oneOClock;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours} hours and ${minutes} minutes`;
}

// Update the time display
function updateTimeDisplay() {
    const timeSinceElement = document.getElementById("time-since");
    timeSinceElement.textContent = getTimeSinceOne();
}

// Update time display on page load and every minute
updateTimeDisplay();
setInterval(updateTimeDisplay, 60000);
