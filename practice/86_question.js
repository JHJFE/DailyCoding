function solution(n, m) {
  let max = Math.max(m, n)
  let min = Math.min(m, n)
  while (min > 0) {
    let temp = max % min
    max = min
    min = temp
  }
  return [max, (n * m) / max]
}
let a = solution(3, 12)
let b = solution(2, 5)
console.log(a, b)
