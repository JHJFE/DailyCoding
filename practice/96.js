//내림차순정렬
function solution(n) {
  var answer = 0
  return +`${n}`
    .split('')
    .map((el) => +el)
    .sort((a, b) => b - a)
    .join('')
}
let a = solution(819324352213)
console.log(a)
