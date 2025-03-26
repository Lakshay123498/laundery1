// Handling form submission
document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const timeSlot = document.getElementById("timeSlot").value;
  const date = document.getElementById("date").value;
  const contact = document.getElementById("contact").value;

  // Prepare data for Firebase
  const bookingData = {
    name,
    timeSlot,
    date,
    contact
  };

  // Add booking to Firestore
  await addBooking(bookingData);

  // Reset the form
  e.target.reset();

  // Refresh the list of bookings
  getBookings();
});
