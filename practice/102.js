//문자열 내림차순
function solution(s) {
  return s
    .split('')
    .sort((a, b) => (a > b ? -1 : 1))
    .join('')
}
let a = solution('Zbczhfg')
console.log(a)
