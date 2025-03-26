// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firestore functions for database operations
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Function to add a booking to Firestore
async function addBooking(bookingData) {
  try {
    const docRef = await addDoc(collection(db, "bookings"), bookingData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Function to retrieve all bookings from Firestore
async function getBookings() {
  const querySnapshot = await getDocs(collection(db, "bookings"));
  const bookingsList = document.getElementById("bookings");
  bookingsList.innerHTML = ''; // Clear the list before displaying updated bookings
  querySnapshot.forEach((doc) => {
    const bookingData = doc.data();
    const li = document.createElement("li");
    li.textContent = `Name: ${bookingData.name}, Time Slot: ${bookingData.timeSlot}, Date: ${bookingData.date}, Contact: ${bookingData.contact}`;
    bookingsList.appendChild(li);
  });
}

// Call getBookings on page load to display current bookings
window.onload = getBookings;
