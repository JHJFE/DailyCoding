function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split('')
    let result = []
    let count = 1;
    let pre = str[0]
  
    for(let i =1 ; i <= arr.length ;i++){
        if(str[i] === str[i-1]){
            count ++
        }else{
            if(count >=3){
                result.push(`${count}${pre}`)
            }else{
                result.push(`${pre.repeat(count)}`)
            }
            count = 1;
            pre = str[i]
        }
    }
    return result.join('')
}
let output = compressString('dsafdasfffffsgaaaaabbbscccdd');
console.log(output); // --> dsafdas5fsg5a3bs3cdd

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p  