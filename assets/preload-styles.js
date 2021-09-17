(() => {
  let elements = document.querySelectorAll('link[as=style]');
  if (typeof elements === 'undefined' || elements.length < 1) {
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.rel = 'stylesheet';
    element.onload = null;
    element.removeAttribute('as');
  }
})();