//
function solution(n) {
  var answer = []
  return n
    .toString()
    .split('')
    .map((el) => +el)
    .reverse()
}
