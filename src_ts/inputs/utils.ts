export const getInputElements = (form: HTMLFormElement): HTMLInputElement[] =>
  Array.from(form.querySelectorAll("input"));

export const isVisibleElement = (element: HTMLElement): boolean =>
  element.offsetWidth !== 0 || element.offsetHeight !== 0;
