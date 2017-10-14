export const reset = (elm) => {
  elm.innerText = "?";
  elm.className = elm.className.replace('disable', '');
  elm.className = elm.className.replace('oBtn', '');
  elm.className = elm.className.replace('xBtn', '');
  elm.className = elm.className.replace('btn-primary', '');
  elm.className = elm.className.replace('btn-info', '');
};

export const resetItems = () => {
  const boxes = document.querySelectorAll('#game li');
  for (var i = 0; i < boxes.length; i++) {
    reset(boxes[i]);
  }
};

export const checkO = () => {
  if (document.getElementById("square1").classList.contains('oBtn') &&
    document.getElementById("square2").classList.contains('oBtn') &&
    document.getElementById("square3").classList.contains('oBtn') ||
    document.getElementById("square4").classList.contains('oBtn') &&
    document.getElementById("square5").classList.contains('oBtn') &&
    document.getElementById("square6").classList.contains('oBtn') ||
    document.getElementById("square7").classList.contains('oBtn') &&
    document.getElementById("square8").classList.contains('oBtn') &&
    document.getElementById("square9").classList.contains('oBtn') ||
    document.getElementById("square1").classList.contains('oBtn') &&
    document.getElementById("square4").classList.contains('oBtn') &&
    document.getElementById("square7").classList.contains('oBtn') ||
    document.getElementById("square2").classList.contains('oBtn') &&
    document.getElementById("square5").classList.contains('oBtn') &&
    document.getElementById("square8").classList.contains('oBtn') ||
    document.getElementById("square3").classList.contains('oBtn') &&
    document.getElementById("square6").classList.contains('oBtn') &&
    document.getElementById("square9").classList.contains('oBtn')) {
       return true;
  }
  return false;
}

export const checkX = () => {
  if (document.getElementById("square1").classList.contains('xBtn') &&
    document.getElementById("square2").classList.contains('xBtn') &&
    document.getElementById("square3").classList.contains('xBtn') ||
    document.getElementById("square4").classList.contains('xBtn') &&
    document.getElementById("square5").classList.contains('xBtn') &&
    document.getElementById("square6").classList.contains('xBtn') ||
    document.getElementById("square7").classList.contains('xBtn') &&
    document.getElementById("square8").classList.contains('xBtn') &&
    document.getElementById("square9").classList.contains('xBtn') ||
    document.getElementById("square1").classList.contains('xBtn') &&
    document.getElementById("square4").classList.contains('xBtn') &&
    document.getElementById("square7").classList.contains('xBtn') ||
    document.getElementById("square2").classList.contains('xBtn') &&
    document.getElementById("square5").classList.contains('xBtn') &&
    document.getElementById("square8").classList.contains('xBtn') ||
    document.getElementById("square3").classList.contains('xBtn') &&
    document.getElementById("square6").classList.contains('xBtn') &&
    document.getElementById("square9").classList.contains('xBtn')) {
    return true;
  }
  return false;
}

export default resetItems;