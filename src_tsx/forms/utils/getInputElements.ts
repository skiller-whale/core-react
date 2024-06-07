export default (
  form: HTMLFormElement,
): Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> =>
  Array.from(form.querySelectorAll("input, select, textarea"));
