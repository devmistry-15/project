// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
    const tripRadios = document.getElementsByName("trip");
    const returnDate = document.getElementById("returnDate");
    const returnTime = document.getElementById("returnTime");

    // Show or hide return fields based on trip type
    tripRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "oneway" || this.value === "emptyleg") {
                returnDate.parentElement.style.display = "none";
                returnTime.parentElement.style.display = "none";
            } else {
                returnDate.parentElement.style.display = "block";
                returnTime.parentElement.style.display = "block";
            }
        });
    });

    // Initialize based on default selection
    if (document.getElementById("round").checked) {
        returnDate.parentElement.style.display = "block";
        returnTime.parentElement.style.display = "block";
    } else {
        returnDate.parentElement.style.display = "none";
        returnTime.parentElement.style.display = "none";
    }
});

// Function to gather and validate flight data
function getairData() {
    const trip = document.querySelector('input[name="trip"]:checked').value;
    const from = document.getElementById("leavfrom").value.trim();
    const to = document.getElementById("goingto").value.trim();
    const departDate = document.getElementById("departDate").value;
    const departTime = document.getElementById("departTime").value;
    const returnDate = document.getElementById("returnDate").value;
    const returnTime = document.getElementById("returnTime").value;
    const passengers = document.getElementById("passengers").value.trim();

    // Validate required fields
    if (!from || !to || !departDate || !departTime || !passengers || passengers <= 0) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    // For round and multi trips, validate return date/time
    if ((trip === "round" || trip === "multi") && (!returnDate || !returnTime)) {
        alert("Please fill in the return date and time.");
        return;
    }

    // Create summary message
    let summary = `Booking Summary:\n`;
    summary += `Trip Type: ${trip.toUpperCase()}\n`;
    summary += `From: ${from}\n`;
    summary += `To: ${to}\n`;
    summary += `Departure: ${departDate} at ${departTime}\n`;

    if (trip === "round" || trip === "multi") {
        summary += `Return: ${returnDate} at ${returnTime}\n`;
    }

    summary += `Passengers: ${passengers}\n`;

    // Show the summary in an alert
    alert(summary);
}
