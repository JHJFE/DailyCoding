function solution(n, m, section) {
  let answer = 0
  let pos = 0
  for (let i = 0; i < section.length; i++) {
    if (section[i] > pos) {
      answer++
      pos = section[i] + m - 1
    }
  }
  return answer
}
// let a = solution(8, 4, [2, 3, 6])
// let b = solution(5, 4, [1, 3])
let c = solution(4, 1, [1, 2, 3, 4])
// let d = solution(10, 1, [1, 5, 9])
// console.log(a, b, c, d)
console.log(c)
