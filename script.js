// Select necessary DOM elements
const loginSection = document.getElementById("loginSection");
const optionsSection = document.getElementById("optionsSection");
const doctorListSection = document.getElementById("doctorListSection");
const appointmentFormSection = document.getElementById(
  "appointmentFormSection"
);
const communicationSection = document.getElementById("communicationSection");
const medicationReminderSection = document.getElementById(
  "medicationReminderSection"
); // New section

const loginButton = document.getElementById("loginButton");
const scheduleAppointmentButton = document.getElementById(
  "scheduleAppointmentButton"
);
const addReminderButton = document.getElementById("addReminderButton");
const communicationButton = document.getElementById("communicationButton");
const backToOptionsFromDoctorsButton = document.getElementById(
  "backToOptionsFromDoctorsButton"
);
const backToOptionsFromAppointmentButton = document.getElementById(
  "backToOptionsFromAppointmentButton"
);
const backToOptionsFromCommunicationButton = document.getElementById(
  "backToOptionsFromCommunicationButton"
);
const backToOptionsFromReminderButton = document.getElementById(
  "backToOptionsFromReminderButton"
); // New

const messageList = document.getElementById("messageList");
const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");

// Medication reminder elements
const medPatientName = document.getElementById("medPatientName");
const medPatientId = document.getElementById("medPatientId");
const medicationName = document.getElementById("medicationName");
const medicationTime = document.getElementById("medicationTime");
const addReminderSubmitButton = document.getElementById(
  "addReminderSubmitButton"
);
const medicationReminderList = document.getElementById(
  "medicationReminderList"
);

// Handle login
loginButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    loginSection.style.display = "none";
    optionsSection.style.display = "block";
  } else {
    alert("Please enter both username and password");
  }
});

// Navigate to doctor list section when scheduling appointment
scheduleAppointmentButton.addEventListener("click", function () {
  optionsSection.style.display = "none";
  doctorListSection.style.display = "block";
  displayDoctorList(); // Display the list of doctors
});

// Navigate to communication section
communicationButton.addEventListener("click", function () {
  optionsSection.style.display = "none";
  communicationSection.style.display = "block";
});

// Navigate to medication reminder section when "Add Medication Reminder" is clicked
addReminderButton.addEventListener("click", function () {
  optionsSection.style.display = "none";
  medicationReminderSection.style.display = "block";
});

// Navigate back to options from doctor list
backToOptionsFromDoctorsButton.addEventListener("click", function () {
  doctorListSection.style.display = "none";
  optionsSection.style.display = "block";
});

// Navigate back to options from appointment form
backToOptionsFromAppointmentButton.addEventListener("click", function () {
  appointmentFormSection.style.display = "none";
  optionsSection.style.display = "block";
});

// Navigate back to options from communication section
backToOptionsFromCommunicationButton.addEventListener("click", function () {
  communicationSection.style.display = "none";
  optionsSection.style.display = "block";
});

// Navigate back to options from medication reminder section
backToOptionsFromReminderButton.addEventListener("click", function () {
  medicationReminderSection.style.display = "none";
  optionsSection.style.display = "block";
});

// Handle adding medication reminder
addReminderSubmitButton.addEventListener("click", function () {
  const patientName = medPatientName.value;
  const patientId = medPatientId.value;
  const medName = medicationName.value;
  const medTime = medicationTime.value;

  if (patientName && patientId && medName && medTime) {
    const reminderItem = document.createElement("li");
    reminderItem.textContent = `Patient: ${patientName} (ID: ${patientId}) - Medication: ${medName} at ${medTime}`;
    medicationReminderList.appendChild(reminderItem);

    // Clear input fields
    medPatientName.value = "";
    medPatientId.value = "";
    medicationName.value = "";
    medicationTime.value = "";
  } else {
    alert("Please fill in all fields.");
  }
});
