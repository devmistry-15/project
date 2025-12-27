
    // Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  tripTypeHandler();
  heroButtonHandler();
});

// ------------------------------
// Trip Type Logic
// ------------------------------
function tripTypeHandler() {
  const tripRadios = document.querySelectorAll("input[name='trip']");
  const returnDate = document.getElementById("returnDate");
  const returnTime = document.getElementById("returnTime");

  tripRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "oneway") {
        returnDate.disabled = true;
        returnTime.disabled = true;
        returnDate.value = "";
        returnTime.value = "";
      } else {
        returnDate.disabled = false;
        returnTime.disabled = false;
      }
    });
  });
}

// ------------------------------
// Flight Form Validation
// ------------------------------
function getairData() {
  const from = document.getElementById("leavfrom").value.trim();
  const to = document.getElementById("goingto").value.trim();
  const departDate = document.getElementById("departDate").value;
  const departTime = document.getElementById("departTime").value;
  const passengers = document.getElementById("passengers").value;

  if (!from || !to) {
    alert("Please enter departure and destination locations.");
    return;
  }

  if (!departDate || !departTime) {
    alert("Please select departure date and time.");
    return;
  }

  if (passengers <= 0) {
    alert("Please enter a valid number of passengers.");
    return;
  }

  // Simulated booking success
  alert(
    `Flight Search Successful!\n\nFrom: ${from}\nTo: ${to}\nPassengers: ${passengers}`
  );
}

// ------------------------------
// Hero Button Action
// ------------------------------
function heroButtonHandler() {
  const heroBtn = document.querySelector(".hero a");

  if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById("flight-form")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
}

