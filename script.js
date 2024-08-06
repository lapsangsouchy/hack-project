/* Reference to Entire Database */
const database = firebase.database().ref();

/* Reference to HTML Elements */
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const showRegisterSpan = document.getElementById('show-register');
const showLoginSpan = document.getElementById('show-login');

/* Added Event Listeners to Elements */
registerBtn.onclick = register;
loginBtn.onclick = login;
showRegisterSpan.onclick = showRegister;
showLoginSpan.onclick = showLogin;

/* Define Callback Functions to Toggle Register/Login Screens */
function showRegister() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

function showLogin() {
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('register-section').style.display = 'none';
}

/* Define Callback Functions to Register and Login */
function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (email && password) {
    // Store user credentials in the database
    database
      .push({
        email: email,
        password: password,
      })
      .then(function () {
        alert('User registered successfully!');
        showLogin();
      })
      .catch(function (error) {
        alert(error.message);
      });
  } else {
    alert('Please fill in all fields.');
  }
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    database
      .orderByChild('email')
      .equalTo(email)
      .once('value', function (snapshot) {
        if (snapshot.exists()) {
          snapshot.forEach(function (childSnapshot) {
            const user = childSnapshot.val();
            if (user.password === password) {
              document.getElementById('login-section').style.display = 'none';
              document.getElementById('register-section').style.display =
                'none';
              document.getElementById('hidden-content').style.display = 'block';
              hiddenScreen1();
            } else {
              alert('Not a real password! Intruder!');
            }
          });
        } else {
          alert('User not found! Intruder!');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert(
      "If you're trying to hack in you should probably put something in the text field..."
    );
  }
}
