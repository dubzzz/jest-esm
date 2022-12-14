import { compute } from "./db.js";
export const run = (a, b, c) => {
  return compute(a, b) + compute(b, c);
};
