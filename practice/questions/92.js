// 연속된 부분 수열의 합
function solution(sequence, k) {
  var answer = []
  let right = 0
  let left = 0
  let total = 0

  while (right !== sequence.length) {
    let temp = total + sequence[right]
    if (temp < k) {
      total += sequence[right]
      right++
    } else if (temp > k) {
      total -= sequence[left]
      left++
    } else if (temp === k) {
      if (answer.length > 0) {
        if (answer[1] - answer[0] > right - left) answer = [left, right]
      } else answer.push(left, right)

      total += sequence[right]
      right++
    }
  }
  return answer
}
let a = solution([1, 1, 1, 2, 3, 4, 5], 5)
let b = solution([1, 2, 3, 4, 5], 7)
let c = solution([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 8)
console.log(a, b, c)
