import { getReverseString } from "../../utils/getReverseString.js";

describe("test for getReverseString function", () => {
    it("reverse string 'str' is 'rts'", () => {
        expect(getReverseString("str")).toBe("rts");
        expect(getReverseString("string")).toBe("gnirts");
    });
});