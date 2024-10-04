const audioPlayer = document.getElementById('audio-player');
const pads = [document.getElementById('pad1'), document.getElementById('pad2')];
let activePad = 0;
let sounds = {};

// Hämta ljudfilnamn från audio.json
fetch('audio.json')
  .then(response => response.json())
  .then(data => {
    sounds = data;
    createButtons();
  });

function playSound(padIndex, soundIndex) {
  audioPlayer.src = `audio/${sounds['pad' + (padIndex + 1)][soundIndex]}`;
  audioPlayer.play();
}

function createButtons() {
  for (let i = 0; i < pads.length; i++) {
    for (let j = 0; j < 12; j++) {
      const button = document.createElement('div');
      button.classList.add('btn');
      button.setAttribute('tabindex', 0);
      button.onclick = () => playSound(i, j);
      pads[i].appendChild(button);
    }
  }
}

function changePad(padIndex) {
  activePad = padIndex - 1;
  for (let i = 0; i < pads.length; i++) {
    pads[i].style.display = i === activePad ? 'grid' : 'none';
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  let soundIndex;

  if (activePad === 0) { // Om pad1 är aktiv
    switch (key) {
      case 'q': soundIndex = 0; break;
      case 'w': soundIndex = 1; break;
      case 'e': soundIndex = 2; break;
      case 'r': soundIndex = 3; break;
      case 't': soundIndex = 4; break;
      case 'y': soundIndex = 5; break;
      case 'u': soundIndex = 6; break;
      case 'i': soundIndex = 7; break;
      case 'o': soundIndex = 8; break;
      case 'p': soundIndex = 9; break;
      case 'å': soundIndex = 10; break;
      case 'a': soundIndex = 11; break;
      default: return; // Ignorera andra tangenter
    }
  } else if (activePad === 1) { // Om pad2 är aktiv
    switch (key) {
      case 's': soundIndex = 0; break;
      case 'd': soundIndex = 1; break;
      case 'f': soundIndex = 2; break;
      case 'g': soundIndex = 3; break;
      case 'h': soundIndex = 4; break;
      case 'j': soundIndex = 5; break;
      case 'k': soundIndex = 6; break;
      case 'l': soundIndex = 7; break;
      case 'ö': soundIndex = 8; break;
      case 'ä': soundIndex = 9; break;
      case 'z': soundIndex = 10; break;
      case 'x': soundIndex = 11; break;
      default: return; // Ignorera andra tangenter
    }
  }

  playSound(activePad, soundIndex);
});

changePad(1);