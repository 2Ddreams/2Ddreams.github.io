const backgroundMusic = document.getElementById('backgroundMusic');
const musicIcon = document.querySelector('.music-icon');
const timerElement = document.querySelector('.timer');
const startTime = new Date('2017-01-01T00:00:00'); // Replace this with your desired start date
let isMusicPlaying = true;
let isMenuOpen = false;

function playMusic() {
  backgroundMusic.play();
  isMusicPlaying = true;
  updateMusicIcon();
}

function pauseMusic() {
  backgroundMusic.pause();
  isMusicPlaying = false;
  updateMusicIcon();
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function updateMusicIcon() {
  const musicIconImage = musicIcon.querySelector('img');
  if (isMusicPlaying) {
    musicIconImage.setAttribute('src', '../music_icon_play.png'); // Replace with pause icon image
  } else {
    musicIconImage.setAttribute('src', '../music_icon_pause.png'); // Replace with play icon image
  }
}


function updateTimer() {
  const currentTime = new Date();
  const timeDifference = currentTime - startTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  timerElement.textContent = `Time Passed: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call the updateTimer function every second
setInterval(updateTimer, 1000);

// function contiButton(){
//     window.location.href = 'https://open.spotify.com/playlist/4rfFqkv8Ug1oEHIvkcvaFy?si=15124590f42b4f07'; // Replace 'new_page.html' with your desired page URL

// }

  /* Open the sidenav */
function openNav() {
  isMenuOpen = true;
  document.getElementById("sideNav").style.width = "100%";
  document.getElementById("bar1").style.backgroundColor = "#818181";
  document.getElementById("bar2").style.backgroundColor = "#818181";
  document.getElementById("bar3").style.backgroundColor = "#818181";
}

/* Close/hide the sidenav */
function closeNav() {
  isMenuOpen = false;
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("bar1").style.backgroundColor = "#333";
  document.getElementById("bar2").style.backgroundColor = "#333";
  document.getElementById("bar3").style.backgroundColor = "#333";
  
}

function menuToggle(x) {
  x.classList.toggle("change");

  if (isMenuOpen) {
    closeNav(); 
  } else {
    openNav();
  }
}