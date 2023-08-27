function solution(a, b) {
  return new Date(`2016-${a}-${b}`).toDateString().split(' ')[0].toUpperCase()
}
let a = solution(5, 24)
console.log(a)
