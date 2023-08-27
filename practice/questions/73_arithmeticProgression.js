function solution(x, n) {
  var answer = []
  let max = x * n
  for (let i = 1; i <= n; i++) {
    answer.push(i * x)
  }
  return answer
}
