// function modulo(num1, num2) {
//     // TODO: 여기에 코드를 작성합니다.
//     if(num1 ===0){
//       return num1&num2 
//     }else if(num2===0){
//       return 'Error: cannot divide by zero'
//     }
//     return num1&(num2-1) 
//   }
// & 연산자를 사용하는 정석적인 코드, But 123456789 % 67 을 해결하지 못함 왜일까?

function modulo(num1, num2) {// 내가 작성한 코드
    // TODO: 여기에 코드를 작성합니다.
    if(num1 ===0){
      return num1&num2 
    }else if(num2===0){
      return 'Error: cannot divide by zero'
    }
    while(num1>=num2){
      num1 -= num2
    }
    return num1
  }
  
let output = modulo( 123456789, 67);
console.log(output); // --> 1