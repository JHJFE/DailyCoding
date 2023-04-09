function solution(s){
    var answer = [],check;
    for(let el of s){
        if(el === '(' ){
            answer.push(el)
            
        }else{
            check = answer.pop()
            if(check === undefined){return false}
        }
           
    }
    return answer.length === 0;
}
let a = solution('()()')
console.log(a)