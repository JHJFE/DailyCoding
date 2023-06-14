function solution(n) {
  let answer = 0
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 1) {
      return i
      break
    }
  }
  return n - 1
}
let a = solution(18)
console.log(a)
