function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.
    if(str.length === 0){
        return 0;
    }
    let arr = str.split('');
    let numArr = []
    let strArr = []
    
    arr.map((letter) => {
        // 문자일 경우 NaN으로,문자열 숫자일 경우 숫자로 바꾸고 문자랑 느슨한 동치로 비교해 맞으면 숫자 담기, 공백이 아닌 문자 담기
        parseInt(letter) == letter ? numArr.push(Number(letter)) // Number()은 공백을 0으로 바꾸어 공백과 0을 비교하면 숫자로 인식해 공백을 담아버려 parseInt를 사용해햐함
        : letter !== ' ' ? strArr.push(letter)
        : null
    })
    let sum = numArr.reduce((cur,acc)=>{
        return cur+acc
    },0)
    let deno = strArr.length
    
    return Math.round(sum/deno)
}
let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2