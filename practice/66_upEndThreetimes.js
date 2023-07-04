function solution(n) {
  var answer = 0
  let box = [],
    i = 1,
    temp = n

  while (n >= 3) {
    box.push(n % 3)
    n = Math.floor(n / 3)
  }
  box.push(n)
  while (box.length >= 1) {
    answer += box.pop() * i
    i *= 3
  }
  return answer
}
let a = solution(45)
console.log(a)
// 0 45
//  0 15
//  1  5
//     2
