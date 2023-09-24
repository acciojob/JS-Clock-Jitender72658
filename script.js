//your code here
function updateClock() {
  // Get the clock hands elements
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');
  const time = document.querySelector('#time');
	
  // Get the current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  time.innerText = `${hours}: ${minutes}: ${seconds}`;
  // Calculate the degree of rotation for each hand
  const hourRotation = (360 / 12) * ((hours+15) % 12) + (360 / 12) * ((minutes+15) / 60);
  const minuteRotation = (360 / 60) * (minutes+15) + (360 / 60) * (seconds / 60);
  const secondRotation = (360 / 60) * (seconds+15);

  // Apply the rotation using the transform property
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update when the page loads
updateClock();
