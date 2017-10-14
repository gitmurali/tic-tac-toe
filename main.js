import reset, {
  hasClass,
  resetItems,
  checkX,
  checkO
} from './functions';

document.addEventListener("DOMContentLoaded", () => {
  const x = "x";
  const o = "o";
  let count = 0;
  const boxes = document.querySelectorAll('#game li');

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', (event) => {
      event.preventDefault();
      if (checkO() || checkX()) {
        reset(event.target);
      } else if (count == 8) {
        alert('Game over!');
        reset(boxes[i]);
        count = 0
      } else if (hasClass(event.target, 'disable')) {
        alert('Already selected');
      } else if (count % 2 == 0) {
        count++;
        event.target.innerText = x;
        event.target.className += ' disable x btn-primary';
        if (checkX()) {
          alert('x wins');
          count = 0;
          x_win++;
        }
      } else {
        count++;
        event.target.innerText = o;
        event.target.className += ' disable o btn-info';
        if (checkO()) {
          alert('O wins');
          count = 0;
          o_win++;
        }
      }

    });
    document.getElementById("reset").addEventListener("click", () => {
      resetItems();
      count = 0;
    });
  }
});
