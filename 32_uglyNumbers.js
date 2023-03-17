const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    const container = [1, 2, 3, 4,5]

    if(n<=5){
        return container[n-1]
    }

    let idx2 = 3, idx3 = 1, idx5 = 1
    
    let Mul2, Mul3, Mul5
    while (container.length !== n) {

        Mul2 = container[idx2] * 2 // 4  6  8
        console.log(Mul2)
        Mul3 = container[idx3] * 3 // 6  6  9
        Mul5 = container[idx5] * 5 // 8  8  8
       
        container.push(Math.min(Mul2, Mul3, Mul5));

        if(container[container.length-1] === Mul2) idx2++;
        if(container[container.length-1] === Mul3) idx3++;
        if(container[container.length-1] === Mul5) idx5++;
        console.log(container)
    }
    return container[n-1]
};
let result = uglyNumbers(8);
console.log(result); // --> 9

result = uglyNumbers(3);
console.log(result); // --> 3