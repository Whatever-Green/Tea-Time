// Create an array of clock elements
const clocks = [
    { timeElement: document.getElementById("time1"), timezoneElement: document.getElementById("timezone1"), setTimeButton: document.getElementById("setTime1"), manualTime: null },
    { timeElement: document.getElementById("time2"), timezoneElement: document.getElementById("timezone2"), setTimeButton: document.getElementById("setTime2"), manualTime: null },
    { timeElement: document.getElementById("time3"), timezoneElement: document.getElementById("timezone3"), setTimeButton: document.getElementById("setTime3"), manualTime: null }
];

// Function to update all clocks
function updateAllClocks() {
    clocks.forEach(clock => updateClock(clock));
}

// Update the specified clock's time
function updateClock(clock) {
    const timezone = clock.timezoneElement.value;
    const currentTime = clock.manualTime ?
        clock.manualTime.toLocaleTimeString('en-US', { timeZone: timezone }) :
        new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    clock.timeElement.textContent = currentTime;
}

// Set the time for the specified clock
function setClockTime(clock) {
    const newTime = prompt("Enter new time (HH:MM:SS):");
    if (newTime) {
        const [hours, minutes, seconds] = newTime.split(":");
        const timeZone = clock.timezoneElement.value || "UTC";
        const setTime = new Date();
        setTime.setUTCHours(hours);
        setTime.setUTCMinutes(minutes);
        setTime.setUTCSeconds(seconds);
        clock.manualTime = setTime; // Store the manual set time
        updateClock(clock); // Update the clock that was manually set
        updateAnalogClocks(); // Update the corresponding analog clock
    }
}

// Attach event listeners to buttons and inputs for each clock
clocks.forEach(clock => {
    clock.setTimeButton.addEventListener("click", () => setClockTime(clock));
    clock.timezoneElement.addEventListener("input", () => updateClock(clock));
});

// Update all clocks every second
setInterval(updateAllClocks, 1000);
updateAllClocks(); // Initialize clock times

// ANALOG CLOCKS

// ... (previous code for analog clocks)

// Update all clocks and analog clocks every second
setInterval(() => {
    updateAllClocks();
    updateAnalogClocks();
}, 1000);

updateAnalogClocks(); // Initialize analog clocks
