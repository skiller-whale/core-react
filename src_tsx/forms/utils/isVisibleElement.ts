export default (element: HTMLElement): boolean =>
  element.offsetWidth !== 0 || element.offsetHeight !== 0;
