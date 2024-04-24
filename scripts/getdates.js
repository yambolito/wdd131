// Function to get the current date and time
function getCurrentDateTime() {
    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const dateTimeString = currentDate.toLocaleString('en-US', options);
    return dateTimeString;
}

// Function to update the date and time in the footer
function updateDateTimeFooter() {
    const dateTimeElement = document.getElementById('date-time');
    const currentDateTime = getCurrentDateTime();
    dateTimeElement.textContent = `Last Modification: ${currentDateTime}`;
}

// Call the function to update the date and time when the page loads
updateDateTimeFooter();

// Update the date and time every second
setInterval(updateDateTimeFooter, 1000);