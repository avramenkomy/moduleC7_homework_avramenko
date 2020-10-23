export function checkPrimeNumber(number) {
    let result;
    let isPrime = true;

    if (number > 1 && number <= 1000) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            result = `Number ${number} is prime`;
        } else {
            result = `Number ${number} is not prime`;
        }
    } else {
        result = "incorrect data";
    }
    return result;
};