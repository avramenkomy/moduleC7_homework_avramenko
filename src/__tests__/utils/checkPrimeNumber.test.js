import { checkPrimeNumber } from "../../utils/checkPrimeNumber.js";

xdescribe("test for checkPrimeNumber function", () => {
    //1-ый тест проверяет работу функции с простым числом
    it("should operate correctly with prime number", () => {
        expect(checkPrimeNumber(17)).toBe("Number 17 is prime");
    }),

    //2-ой тест проверяет работу функции с составным числом
    it("should operate correctly with composite number", () => {
        expect(checkPrimeNumber(18)).toBe("Number 18 is not prime");
    }),

    //3-й тест проверяет работу функции с некорректным числом
    it("should operate correctly with incorrect number", () => {
        expect(checkPrimeNumber(-1)).toBe("incorrect data");
    })
});

//Код приведенный выше можно оптимизировать
xdescribe("test for checkPrimeNumber function", () => {
    const prime = 17;
    const composite = 18;

    it("should operate correctly with prime, composite and invalid number", ()=> {
        expect(checkPrimeNumber(prime)).toBe(`Number ${prime} is prime`);
        expect(checkPrimeNumber(composite)).toBe(`Number ${composite} is not prime`);
        expect(checkPrimeNumber(-1)).toBe("incorrect data");
    });
});