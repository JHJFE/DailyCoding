// 나누는수 배열
function solution(arr, divisor) {
  let answer = arr
    .filter((el) => (el % divisor === 0 ? el : null))
    .sort((a, b) => a - b)
  return answer.length === 0 ? [-1] : answer
}
