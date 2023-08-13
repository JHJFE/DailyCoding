// 문자열 다루기 기본
function solution(s) {
  if (![4, 6].includes(s.length)) return false
  for (let val of s) {
    if (isNaN(val)) return false
  }
  return true
}
let a = solution('a12s')
let b = solution('1234')
console.log(a, b)
