// 소수찾기
function solution(n) {
  var answer = 0

  let primeArr = new Array(n + 1).fill(true)
  primeArr[0] = false
  primeArr[1] = false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArr[j] = false
      }
    }
  }
  primeArr.map((el) => (el ? answer++ : null))
  return answer
}
let a = solution(16)
console.log(a)
