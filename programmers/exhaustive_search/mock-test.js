function solution(answers) {
  //12345
  //21232425
  //3311224455
  let num1 = [1, 2, 3, 4, 5]
  let num2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0
  for (let i = 0; i < answers.length; i++) {
    if (num1[i % 5] === answers[i]) {
      cnt1++
    }
    if (num2[i % 8] === answers[i]) {
      cnt2++
    }
    if (num3[i % 10] === answers[i]) {
      cnt3++
    }
  }
  var answer = []
  let max = Math.max(cnt1, cnt2, cnt3)
  if (max === cnt1) {
    answer.push(1)
  }
  if (max === cnt2) {
    answer.push(2)
  }
  if (max === cnt3) {
    answer.push(3)
  }
  return answer
}
console.log(solution([1, 3, 2, 4, 2]))
