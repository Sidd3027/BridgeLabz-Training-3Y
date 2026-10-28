// Q5: Movie Ticket Booking (Objects + RegExp)
// Open q5_movie_booking.html in a browser to test this file.
const bookingForm = document.querySelector("#bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = bookingForm.elements.name.value.trim();
        const email = bookingForm.elements.email.value.trim();
        const seats = Number(bookingForm.elements.seats.value);
        const nameValid = /^[A-Za-z ]+$/.test(name);
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;
        const result = document.querySelector("#bookingResult");

        if (!nameValid || !emailValid || !seatsValid) {
            result.textContent = "Enter a valid name, email, and seat count from 1 to 10.";
            return;
        }

        const booking = { name, email, seats };
        result.textContent = `Booking Confirmed\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    });
}
