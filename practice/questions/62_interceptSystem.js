function solution(targets) {
  var answer = 0
  let end
  targets.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < targets.length; i++) {
    if (end > targets[i][0]) {
      end = Math.min(end, targets[i][1])
    } else {
      answer++
      end = targets[i][1]
    }
  }
  return answer
}
let a = solution([
  [0, 4],
  [11, 18],
  [5, 9],
  [9, 10],
])
console.log(a)
