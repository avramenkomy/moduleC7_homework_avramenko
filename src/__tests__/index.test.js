// const sum = require("./index.js");

import { sum } from "../index.js";

// test("adds 1+2 equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test("adds 5+4 equal 9", () => {
//     expect(sum(5, 4)).toBe(9);
// });

xdescribe ("test of sum", () => {
    it ("adds 1+2 equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
    it ("adds 3+8 equal 11", () => {
        expect(sum(3, 8)).toBe(11);
    });    
});