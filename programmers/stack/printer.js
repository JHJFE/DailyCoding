
function solution(priorities, location) {
    const result = [];
    const sorted = priorities.slice().sort();
    let max = sorted.pop(),temp = 0
    while(true){
        temp = priorities.shift()
        console.log(max,temp)
        if(max>temp){
            priorities.push(temp)
        }else{
            result.push(temp)
            max = sorted.pop()
            if(location === 0) return location + result.length
        }
        location--;
        if(location === -1) location = priorities.length-1
    }
}
let a = solution([1, 1, 9, 1, 1, 1],0)
console.log(a)