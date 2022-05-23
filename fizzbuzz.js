function fizzbuzz(num) {
    if (num % 2 == 0 && num % 3 == 0){
        return "fizzbuzz";
    }
    if (num % 2 == 0) {
        return "fizz"
    }
    if (num % 3 == 0) {
        return "buzz";
    }

    return num;
}

module.exports = fizzbuzz;