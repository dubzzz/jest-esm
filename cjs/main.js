"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.run = void 0;
const db_1 = require("./db");
const run = (a, b, c) => {
  return db_1.compute(a, b) + db_1.compute(b, c);
};
exports.run = run;
