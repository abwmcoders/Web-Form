var firebaseConfig = {
  apiKey: "AIzaSyBSWNcLGMg6JZ8InxT0CoJcjf3j_8qDnSc",
  authDomain: "fpi-question-bank.firebaseapp.com",
  databaseURL: "https://fpi-question-bank-default-rtdb.firebaseio.com",
  projectId: "fpi-question-bank",
  storageBucket: "fpi-question-bank.appspot.com",
  messagingSenderId: "170348600881",
  appId: "1:170348600881:web:a4203ba03db578c5863f10"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  console.log(name, emailid, msgContent);

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

var saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

var getElementVal = (id) => {
  return document.getElementById(id).value;
};
