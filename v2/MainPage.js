const notification = document.querySelector('.notification');
const passwordInput = document.getElementById('passwordInput');
const container = document.querySelector('.container');
const originalContent = container.innerHTML;
let isMusicPlaying = false;

// Add an event listener for "keypress" on the input field
passwordInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});

function checkPassword() {
  const enteredPassword = passwordInput.value;
  const correctPassword = ['7604', 'admin'];

  if (enteredPassword === correctPassword[0]) {
    // Fade out animation for current content
    container.classList.add('fade-out');

    // After the animation, load the new page
    setTimeout(() => {
      window.location.href = 'Abby/AbbyMemory.html'; // Replace 'new_page.html' with your desired page URL
    }, 1000); // Wait for 1 second (adjust the time as needed based on your animation duration)
  } else if (enteredPassword === correctPassword[1]) {
    // Fade out animation for current content
    container.classList.add('fade-out');

    // After the animation, load the new page
    setTimeout(() => {
      window.location.href = 'admin/adminMemory.html'; // Replace 'new_page.html' with your desired page URL
    }, 1000); // Wait for 1 second (adjust the time as needed based on your animation duration)
  } 
   else {
    displayNotification('Incorrect password. Please try again.');
  }
}

function displayNotification(message) {
  notification.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    hideNotification();
  }, 15000); // Set the duration (in milliseconds) for the notification to stay visible
}

function hideNotification() {
  notification.classList.remove('show');
}

notification.addEventListener('animationend', () => {
  hideNotification();
});
