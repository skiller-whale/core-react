import "@testing-library/jest-dom/vitest";

declare global {
  // eslint-disable-next-line no-var
  var jest: typeof vi;
}

globalThis.jest = vi;
