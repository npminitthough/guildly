// setup-test-data.js
const admin = require("firebase-admin");
const serviceAccount = require("./service-account-key.json"); // Replace with your own service account key

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://guildly.firebaseapp.com", // Replace with your Firebase project URL
});

// Reference to the Firestore emulator
const db = admin.firestore();
db.settings({
  host: "localhost:8080", // Firestore emulator host and port
  ssl: false, // Disable SSL for emulator
});

// Load test data from JSON file
const testData = require("./seed-data.json");

// Function to set up test data in Firestore emulator
async function setupTestData() {
  // Set up categories
  for (const category of testData.categories) {
    await db.collection("categories").doc(category.id).set(category);
  }

  // Set up items
  for (const plant of testData.plants) {
    await db.collection("plants").doc(plant.id).set(plant);
  }
}

// Call the setup function
setupTestData()
  .then(() => {
    console.log("Test data setup complete.");
  })
  .catch((error) => {
    console.error("Error setting up test data:", error);
  });
