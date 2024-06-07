export default (str: string) =>
  str.length > 0
    ? str
        .split(/(?=[A-Z])/)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : str;
