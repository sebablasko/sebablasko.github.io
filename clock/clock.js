let lastTime = { hours: '00', minutes: '00', seconds: '00' };

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  updateFlip('hour', hours, lastTime.hours);
  updateFlip('minute', minutes, lastTime.minutes);
  updateFlip('second', seconds, lastTime.seconds);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  document.getElementById('date').textContent = now.toLocaleDateString(
    'es-CL',
    options
  );
  lastTime = { hours, minutes, seconds };
}

function updateFlip(id, newValue, oldValue) {
  const flipElement = document.getElementById(id);
  if (newValue !== oldValue) {
    setTimeout(() => {
      flipElement.textContent = newValue;
    }, 500);
  }
}

// Update every second
setInterval(updateClock, 1000);

// Llama a la función de actualización inicial
updateClock();
