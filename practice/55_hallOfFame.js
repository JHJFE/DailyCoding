function solution(k, score) {
  var answer = []
  let top = []
  for (let i = 0; i < score.length; i++) {
    top.sort((a, b) => b - a)
    if (top[top.length - 1] < score[i] && top.length === k) {
      top.pop()
      top.push(score[i])
    } else if (top.length < k) {
      top.push(score[i])
    }
    answer.push(Math.min(...top))
  }
  return answer
}
let a = solution(3, [10, 100, 20, 150, 1, 100, 200])
console.log(a)
