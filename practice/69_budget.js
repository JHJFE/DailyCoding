function solution(d, budget) {
  var answer = 0
  let payment = 0
  d.sort((a, b) => a - b)
  for (let i = 0; i < d.length; i++) {
    payment += d[i]
    if (payment > budget) break
    answer++
  }
  return answer
}
let a = solution([1, 3, 2, 5, 4], 9)
console.log(a)
