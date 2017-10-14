export const reset = elm => {
  elm.innerText = "?";
  elm.className = elm.replace('disable', '');
  elm.className = elm.replace('o', '');
  elm.className = elm.replace('x', '');
  elm.className = elm.replace('btn-primary', '');
  elm.className = elm.replace('btn-info', '');
};

export const hasClass = (target, className) => {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
};

export const resetItems = () => {
  for (var i = 0; i < boxes.length; i++) {
    reset(boxes[i]);
  }
};

export const checkO = () => {
  if (document.getElementById("square1").className === 'o' &&
    document.getElementById("square2").className === 'o' &&
    document.getElementById("square3").className === 'o' ||
    document.getElementById("square4").className === 'o' &&
    document.getElementById("square5").className === 'o' &&
    document.getElementById("square6").className === 'o' ||
    document.getElementById("square7").className === 'o' &&
    document.getElementById("square8").className === 'o' &&
    document.getElementById("square9").className === 'o' ||
    document.getElementById("square1").className === 'o' &&
    document.getElementById("square4").className === 'o' &&
    document.getElementById("square7").className === 'o' ||
    document.getElementById("square2").className === 'o' &&
    document.getElementById("square5").className === 'o' &&
    document.getElementById("square8").className === 'o' ||
    document.getElementById("square3").className === 'o' &&
    document.getElementById("square6").className === 'o' &&
    document.getElementById("square9").className === 'o' ||
    document.getElementById("square1").className === 'o' &&
    document.getElementById("square5").className === 'o' &&
    document.getElementById("square9").className === 'o' ||
    document.getElementById("square3").className === 'o' &&
    document.getElementById("square5").className === 'o' &&
    document.getElementById("square7").className === 'o') {
    return true;
  }
  return false;
}

export const checkX = () => {
  if (document.getElementById("square1").className === 'x' &&
    document.getElementById("square2").className === 'x' &&
    document.getElementById("square3").className === 'x' ||
    document.getElementById("square4").className === 'x' &&
    document.getElementById("square5").className === 'x' &&
    document.getElementById("square6").className === 'x' ||
    document.getElementById("square7").className === 'x' &&
    document.getElementById("square8").className === 'x' &&
    document.getElementById("square9").className === 'x' ||
    document.getElementById("square1").className === 'x' &&
    document.getElementById("square4").className === 'x' &&
    document.getElementById("square7").className === 'x' ||
    document.getElementById("square2").className === 'x' &&
    document.getElementById("square5").className === 'x' &&
    document.getElementById("square8").className === 'x' ||
    document.getElementById("square3").className === 'x' &&
    document.getElementById("square6").className === 'x' &&
    document.getElementById("square9").className === 'x' ||
    document.getElementById("square1").className === 'x' &&
    document.getElementById("square5").className === 'x' &&
    document.getElementById("square9").className === 'x' ||
    document.getElementById("square3").className === 'x' &&
    document.getElementById("square5").className === 'x' &&
    document.getElementById("square7").className === 'x') {
    return true;
  }
  return false;
}

export default reset;