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
      } else if (count == 9) {
        alert('tie');
        reset(event.target);
        count = 0
      } else if (hasClass(event.target, 'disable')) {
        alert('Already selected');
      } else if (count % 2 == 0) {
        count++
        event.target.innerText = o;
        event.target.className += ' disable o btn-primary';
        if (checkO()) {
          alert('O wins');
          count = 0;
          o_win++;
        }
      } else {
        count++
        event.target.innerText = x;
        event.target.className += ' disable x btn-info';
        if (checkX()) {
          alert('X wins');
          count = 0;
          x_win++;
        }
      }

    });
    document.getElementById("reset").addEventListener("click", () => {
      resetItems();
      count = 0;
    });
  }
});
