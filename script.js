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
    const backToDoctorsButton = document.getElementById('backToDoctorsButton');

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
        doctorList.innerHTML = ''; // Clear existing doctors
        const doctors = [
            { name: 'Dr. Smith', specialty: 'Cardiology' },
            { name: 'Dr. Johnson', specialty: 'Dermatology' },
            { name: 'Dr. Williams', specialty: 'Pediatrics' },
            { name: 'Dr. Brown', specialty: 'Orthopedics' },
            { name: 'Dr. Garcia', specialty: 'Neurology' }
        ];

        doctors.forEach(function(doctor) {
            const doctorItem = document.createElement('div');
            doctorItem.innerHTML = `<h4>${doctor.name}</h4><p>Specialty: ${doctor.specialty}</p>`;
            const appointmentButton = document.createElement('button');
            appointmentButton.textContent = 'Schedule Appointment';
            appointmentButton.addEventListener('click', function() {
                appointmentFormSection.style.display = 'block';
                doctorListSection.style.display = 'none';
                document.getElementById('doctorInfo').textContent = `Scheduling with ${doctor.name}`;
                loadScheduledAppointments(); // Load already scheduled appointments
            });
            doctorItem.appendChild(appointmentButton);
            doctorList.appendChild(doctorItem);
        });
    }

    // Load already scheduled appointments
    function loadScheduledAppointments() {
        appointmentList.innerHTML = ''; // Clear existing appointments
        scheduledAppointments.forEach(function(appointment) {
            const appointmentItem = document.createElement('li');
            appointmentItem.textContent = `Patient: ${appointment.name} (ID: ${appointment.id}) - Date & Time: ${appointment.date}`;
            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel Appointment';
            cancelButton.addEventListener('click', function() {
                scheduledAppointments = scheduledAppointments.filter(a => a !== appointment);
                loadScheduledAppointments(); // Refresh the list
            });
            appointmentItem.appendChild(cancelButton);
            appointmentList.appendChild(appointmentItem);
        });
    }

    // Schedule appointment
    scheduleButton.addEventListener('click', function() {
        const patientName = patientNameInput.value;
        const patientId = patientIdInput.value;
        const appointmentDate = appointmentDateInput.value;

        if (patientName && patientId && appointmentDate) {
            scheduledAppointments.push({ name: patientName, id: patientId, date: appointmentDate });
            alert('Appointment scheduled successfully!');
            patientNameInput.value = '';
            patientIdInput.value = '';
            appointmentDateInput.value = '';
            loadScheduledAppointments(); // Refresh the list of scheduled appointments
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Navigate back to options from doctor list
    backToOptionsFromDoctorsButton.addEventListener('click', function() {
        doctorListSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to options from medication reminder section
    backToOptionsFromReminderButton.addEventListener('click', function() {
        medicationReminderSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to options from communication section
    backToOptionsFromCommunicationButton.addEventListener('click', function() {
        communicationSection.style.display = 'none';
        optionsSection.style.display = 'block';
    });

    // Navigate back to doctor selection from appointment form
    backToDoctorsButton.addEventListener('click', function() {
        appointmentFormSection.style.display = 'none';
        doctorListSection.style.display = 'block'; // Show the doctor selection section
    });

    // Handle medication reminder submission
    addReminderButton.addEventListener('click', function() {
        optionsSection.style.display = 'none';
        medicationReminderSection.style.display = 'block';
    });

    // Add medication reminder
    addReminderSubmitButton.addEventListener('click', function() {
        const medName = medicationName.value;
        const medPatientNameValue = medPatientName.value;
        const medPatientIdValue = medPatientId.value;
        const medTime = medicationTime.value;

        if (medName && medPatientNameValue && medPatientIdValue && medTime) {
            const reminderItem = document.createElement('li');
            reminderItem.textContent = `Patient: ${medPatientNameValue} (ID: ${medPatientIdValue}) - Medication: ${medName} at ${medTime}`;
            medicationReminderList.appendChild(reminderItem);
            medPatientName.value = '';
            medPatientId.value = '';
            medicationName.value = '';
            medicationTime.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle communication
    communicationButton.addEventListener('click', function() {
        optionsSection.style.display = 'none';
        communicationSection.style.display = 'block';
    });

    // Send message in communication section
    sendMessageButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message) {
            const messageItem = document.createElement('div');
            messageItem.textContent = message;
            messageList.appendChild(messageItem);
            messageInput.value = ''; // Clear the input after sending
        } else {
            alert('Please enter a message.');
        }
    });
});
