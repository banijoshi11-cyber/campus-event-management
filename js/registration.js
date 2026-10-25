
const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const eventId = new URLSearchParams(
            window.location.search
        ).get("id");

        const name = document.getElementById("student-name").value.trim();
        const email = document.getElementById("student-email").value.trim();
        const studentId = document.getElementById("student-id").value.trim();
        const phone = document.getElementById("student-phone").value.trim();

        if (!eventId || !name || !email || !studentId || !phone) {
            alert("Please fill in all fields.");
            return;
        }

        const registrations = JSON.parse(
            localStorage.getItem("campusRegistrations") || "[]"
        );

        const alreadyRegistered = registrations.some(
            registration =>
                registration.eventId === eventId &&
                registration.studentId.toLowerCase() === studentId.toLowerCase()
        );

        if (alreadyRegistered) {
            alert("This student ID is already registered for this event.");
            return;
        }

        registrations.push({
            eventId,
            name,
            email,
            studentId,
            phone,
            registeredAt: new Date().toISOString()
        });

        localStorage.setItem(
            "campusRegistrations",
            JSON.stringify(registrations)
        );

        alert("Registration successful! 🎉");
        registrationForm.reset();
    });
}
