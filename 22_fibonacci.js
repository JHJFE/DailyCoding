function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.

    if (n <= 1) {
        return n;
    }
    return Math.round((1/Math.sqrt(5)) * (Math.pow(((1+Math.sqrt(5))/2),n)  -  Math.pow(((1-Math.sqrt(5))/2),n)))
}

output = fibonacci(9);
console.log(output); // --> 34