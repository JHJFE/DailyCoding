function solution(num) {
  if (num === 1) return 0
  let cnt = 0
  while (num !== 1) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1)
    if (cnt === 500) return -1
    cnt++
  }
  return cnt
}
let a = solution(626331)
console.log(a)
