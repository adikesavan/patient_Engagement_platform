document.addEventListener('DOMContentLoaded', function () {
    // Select necessary DOM elements
    const loginSection = document.getElementById('loginSection');
    const optionsSection = document.getElementById('optionsSection');
    const doctorListSection = document.getElementById('doctorListSection');
    const appointmentFormSection = document.getElementById('appointmentFormSection');
    const communicationSection = document.getElementById('communicationSection');
    const medicationReminderSection = document.getElementById('medicationReminderSection');

    const loginButton = document.getElementById('loginButton');
    const scheduleAppointmentButton = document.getElementById('scheduleAppointmentButton');
    const addReminderButton = document.getElementById('addReminderButton');
    const communicationButton = document.getElementById('communicationButton');
    const backToOptionsFromDoctorsButton = document.getElementById('backToOptionsFromDoctorsButton');
    const backToOptionsFromAppointmentButton = document.getElementById('backToOptionsFromAppointmentButton');
    const backToOptionsFromCommunicationButton = document.getElementById('backToOptionsFromCommunicationButton');
    const backToOptionsFromReminderButton = document.getElementById('backToOptionsFromReminderButton');

    // Medication reminder elements
    const medPatientName = document.getElementById('medPatientName');
    const medPatientId = document.getElementById('medPatientId');
    const medicationName = document.getElementById('medicationName');
    const medicationTime = document.getElementById('medicationTime');
    const addReminderSubmitButton = document.getElementById('addReminderSubmitButton');
    const medicationReminderList = document.getElementById('medicationReminderList');

    // Appointment elements
    const patientNameInput = document.getElementById('patientName');
    const patientIdInput = document.getElementById('patientId');
    const appointmentDateInput = document.getElementById('appointmentDate');
    const scheduleButton = document.getElementById('scheduleButton');
    const appointmentList = document.getElementById('appointmentList');

    // Communication elements
    const messageList = document.getElementById('messageList');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessageButton');

    let scheduledAppointments = [];

    // Handle login
    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            loginSection.style.display = 'none';
            optionsSection.style.display = 'block';
        } else {
            alert('Please enter both username and password');
        }
    });

    // Navigate to doctor list section when scheduling appointment
    scheduleAppointmentButton.addEventListener('click', function() {
        optionsSection.style.display = 'none';
        doctorListSection.style.display = 'block';
        displayDoctorList(); // Display the list of doctors
    });

    // Display the list of doctors
    function displayDoctorList() {
        const doctorList = document.getElementById('doctorList');
        doctorList.innerHTML = ''; // Clear any existing content

        // Sample doctor data (You can replace this with actual data)
        const doctors = [
            { name: "Dr. Smith", specialization: "Cardiology" },
            { name: "Dr. Johnson", specialization: "Dermatology" },
            { name: "Dr. Lee", specialization: "Neurology" },
            { name: "Dr. Taylor", specialization: "Pediatrics" },
            { name: "Dr. Brown", specialization: "Orthopedics" },
        ];

        doctors.forEach(doctor => {
            const doctorItem = document.createElement('div');
            doctorItem.innerHTML = `
                <h4>${doctor.name} - ${doctor.specialization}</h4>
                <button class="appointmentButton" data-name="${doctor.name}" data-specialization="${doctor.specialization}">Schedule Appointment</button>
            `;
            doctorList.appendChild(doctorItem);
        });

        // Add event listeners for appointment buttons
        const appointmentButtons = document.querySelectorAll('.appointmentButton');
        appointmentButtons.forEach(button => {
            button.addEventListener('click', function() {
                const doctorName = button.getAttribute('data-name');
                const doctorSpecialization = button.getAttribute('data-specialization');

                // Navigate to appointment form section
                doctorListSection.style.display = 'none';
                appointmentFormSection.style.display = 'block';
                document.getElementById('doctorInfo').textContent = `Scheduling with ${doctorName} - ${doctorSpecialization}`;
            });
        });
    }

    // Handle scheduling appointments
    scheduleButton.addEventListener('click', function() {
        const patientName = patientNameInput.value;
        const patientId = patientIdInput.value;
        const appointmentDate = appointmentDateInput.value;

        if (patientName && patientId && appointmentDate) {
            const appointmentItem = document.createElement('li');
            appointmentItem.textContent = `Patient: ${patientName} (ID: ${patientId}) - Appointment on ${appointmentDate}`;
            appointmentList.appendChild(appointmentItem);

            // Store appointment details
            scheduledAppointments.push({
                name: patientName,
                id: patientId,
                date: appointmentDate,
            });

            // Clear input fields
            patientNameInput.value = '';
            patientIdInput.value = '';
            appointmentDateInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Navigate back to options from doctor list
    backToOptionsFromDoctorsButton.addEventListener('click', function() {
        doctorListSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to options from appointment form
    backToOptionsFromAppointmentButton.addEventListener('click', function() {
        appointmentFormSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to options from communication section
    backToOptionsFromCommunicationButton.addEventListener('click', function() {
        communicationSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to options from medication reminder section
    backToOptionsFromReminderButton.addEventListener('click', function() {
        medicationReminderSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Handle adding medication reminder
    addReminderButton.addEventListener('click', function() {
        optionsSection.style.display = 'none';
        medicationReminderSection.style.display = 'block';
    });

    addReminderSubmitButton.addEventListener('click', function() {
        const medPatientNameValue = medPatientName.value;
        const medPatientIdValue = medPatientId.value;
        const medName = medicationName.value;
        const medTime = medicationTime.value;

        if (medPatientNameValue && medPatientIdValue && medName && medTime) {
            const reminderItem = document.createElement('li');
            reminderItem.textContent = `Patient: ${medPatientNameValue} (ID: ${medPatientIdValue}) - Medication: ${medName} at ${medTime}`;
            medicationReminderList.appendChild(reminderItem);

            // Clear input fields
            medPatientName.value = '';
            medPatientId.value = '';
            medicationName.value = '';
            medicationTime.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle communication messages
    sendMessageButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message) {
            const messageItem = document.createElement('div');
            messageItem.textContent = message;
            messageList.appendChild(messageItem);
            messageInput.value = ''; // Clear input field
        } else {
            alert('Please enter a message.');
        }
    });

    // Navigate to communication section
    communicationButton.addEventListener('click', function() {
        optionsSection.style.display = 'none';
        communicationSection.style.display = 'block';
    });
});
