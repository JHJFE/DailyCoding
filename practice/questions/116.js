// 정수 제곱근 판별
function solution(n) {
  var answer = Math.sqrt(n)
  return answer % 1 === 0 ? (answer + 1) * (answer + 1) : -1
}
