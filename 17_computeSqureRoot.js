function computeSquareRoot(num) {
    // TODO: 여기에 코드를 작성합니다.
    let x = num-1;
    do{
        x = (x * x + num) / (2 * x)
    }while(Math.abs(num-(x*x))>0.0001) 
   
    return Number(x.toFixed(2))
}
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45