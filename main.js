import  resetItems, {
  checkX,
  checkO
} from './functions';

// add on dom loaded
document.addEventListener("DOMContentLoaded", () => {
  const x = "x";
  const o = "o";
  let count = 0;

  // get all the boxes
  const boxes = document.querySelectorAll('#game li');

  // loop boxes and attach click events.
  for (var i = 0; i < boxes.length; i++) {

    // attach event on each box
    boxes[i].addEventListener('click', (event) => {
      event.preventDefault();
      if (count == 8) {
        alert('Game over!'); // game over if all boxes filled
        resetItems();
        count = 0
      } else if (event.target.classList.contains('disable')) {
        alert('Already selected'); // when clicked on already selected box
      } else if (count % 2 == 0) {
        count++;
        event.target.innerText = x;
        event.target.className += ' disable xBtn btn-primary';
        if (checkX()) {
          alert('x wins');
          resetItems(); // reset boxes if x wins
          count = 0;
        }
      } else {
        count++;
        event.target.innerText = o;
        event.target.className += ' disable oBtn btn-info';
        if (checkO()) {
          alert('O wins');
          resetItems(); // reset boxes if o wins
          count = 0;
        }
      }

    });
    document.getElementById("reset").addEventListener("click", () => {
      resetItems(); // reset all boxes
      count = 0;
    });
  }
});
