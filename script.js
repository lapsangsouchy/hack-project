/* Reference to Entire Database */


/* Reference to HTML Elements */
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const showRegisterSpan = document.getElementById('show-register');
const showLoginSpan = document.getElementById('show-login');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

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
  /** 
   * @TODO Get the email and password from HTML 
   */
  const email;
  const password;


// Check if fields are empty
  if (email && password) {
    /** 
     * @TODO If the email and password are entered, do the following
     *    - Push the data to your database
     *    - Then run the showLogin function
     *    (hint: this will look similar to our API requests)
     */

  } else {
    alert('Please fill in all fields.');
  }
}

function login() {
  /** 
   * @TODO Get the email and password from HTML 
   */
  const email;
  const password;

  if (email && password) {
        /** 
     * @TODO If the email and password are entered, do the following
     *    - Access the database
     *    - Use a Firebase method to look at each email in the database
     *    - Use a Firebase method to listen for when we get the value, then call a function that:
     *        * Checks to see IF it exists in the database using a Firebase method
     *          - IF it doesn't exist, alert that the user isn't valid
     *    (hint: this will look similar to our API requests)
     */
    database
      .orderByChild('email')
      .equalTo(email)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
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
