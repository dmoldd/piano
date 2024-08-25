
import {translateNotes} from "./data.js";
import {doSound, reSound, miSound, faSound, solSound, laSound, siSound} from "./sounds.js";



const noteTable = document.querySelector('.piano__table .piano__table-text')
const noteItem = document.querySelectorAll('.piano__note-item');


const playNote = (evt) => {
  let temp = evt.target.id;
  noteTable.textContent = translateNotes[temp];
  // console.log('текущая нота: ' + temp);

  if (temp === 'do') {
    doSound.play();
  }

  if (temp === 'dodur') {
    dodurSound.play();
  }

  if (temp === 're') {
    reSound.play();
  }

  if (temp === 'redur') {
    redurSound.play();
  }

  if (temp === 'mi') {
    miSound.play();
  }

  if (temp === 'fa') {
    faSound.play();
  }

  if (temp === 'fadur') {
    fadurSound.play();
  }

  if (temp === 'sol') {
    solSound.play();
  }

  if (temp === 'soldur') {
    soldurSound.play();
  }

  if (temp === 'la') {
    laSound.play();
  }

  if (temp === 'ladur') {
    ladurSound.play();
  }

  if (temp === 'si') {
    siSound.play();
  }
}

for (let note of noteItem) {
  note.addEventListener('click', playNote);
}


