function solution(arr)//js
{   
    var answer = [];

   answer = arr.filter((el,i)=> el !== arr[i-1] )

    return answer;
}
let a = solution([1,1,3,3,0,1,1])
console.log(a)