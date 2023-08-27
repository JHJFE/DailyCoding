function solution(dartResult) {
  var answer = []
  let state = false
  let bonus = { S: 1, D: 2, T: 3 }
  let option = ['*', '#']
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      if (state) {
        answer.push(answer.pop() * 10 + +dartResult[i])
        state = false
      } else {
        answer.push(+dartResult[i])
        state = true
      }
    } else if (bonus[dartResult[i]]) {
      answer.push(Math.pow(answer.pop(), bonus[dartResult[i]]))
      state = false
    } else if (option.includes(dartResult[i])) {
      if (dartResult[i] === '*') {
        answer[answer.length - 1] *= 2
        answer[answer.length - 2] *= 2
      } else answer[answer.length - 1] *= -1
    }
  }
  return answer.reduce((acc, cur) => acc + cur)
}
let a = solution('1S2D*3T') //37
console.log(a)
