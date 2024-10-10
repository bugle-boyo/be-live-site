// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOr937VuJhYZknU44JbLgCc3d_5Yssdqk",
    authDomain: "realtime-be-backend.firebaseapp.com",
    databaseURL: "https://realtime-be-backend-default-rtdb.firebaseio.com",
    projectId: "realtime-be-backend",
    storageBucket: "realtime-be-backend.appspot.com",
    messagingSenderId: "820066977221",
    appId: "1:820066977221:web:0cc94309ccd83aed5277ac",
    measurementId: "G-N2GBYFYWJL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form submission event
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  const username = document.getElementById('username').value;
  const breastVolume = document.getElementById('breast_volume').value;

  // Push new user data to Firebase
  firebase.database().ref('users/').push({
    username: username,
    breast_volume: breastVolume
  }).then(function() {
    alert('User added successfully!');
    document.getElementById('userForm').reset(); // Reset form after submission
  }).catch(function(error) {
    alert('Error: ' + error.message);
  });
});
