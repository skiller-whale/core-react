export const getInputElements = (form) =>
  Array.from(form.querySelectorAll("input"));

export const isVisibleElement = (element) =>
  element.offsetWidth !== 0 || element.offsetHeight !== 0;
