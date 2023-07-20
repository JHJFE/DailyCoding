function solution(x) {
  let str = x.toString()
  let total = 0
  str.split('').map((num) => (total = total + parseInt(num)))
  return x % total === 0
}
console.log(solution(12))
