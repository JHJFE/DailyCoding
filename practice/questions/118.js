//자리수 더하기
function solution(n) {
  let answer = 0

  n.toString()
    .split('')
    .map((val) => (answer = answer + +val))
  return answer
}
