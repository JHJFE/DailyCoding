function power(base, exponent) { // 제곱연산자, pow 금지
  // let result = base ;
  // for(let i =0 ;i<exponent-1;i++){
  //   result *= base
  //   if(result >94906249){
  //       result %= 94906249
  //   }
  // }
  // return result
   if (exponent === 0) {
    return 1
  } else {
    let divide = power(base,parseInt(exponent/2))
    let half = (divide*divide) % 94906249
    return exponent%2===0 ? half % 94906249 : half * base % 94906249
  }
}


let output = power(3, 40);
console.log(output); // --> 19334827