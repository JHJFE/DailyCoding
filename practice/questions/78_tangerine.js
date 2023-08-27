function solution(k, tangerine) {
  var answer = 0
  let data = {}
  tangerine.sort((a, b) => a - b)

  for (let i = 0; i < tangerine.length; i++) {
    if (data[tangerine[i]]) {
    } else {
      k -= tangerine[i]
      if (k < 0) {
        break
      } else {
        answer++
      }
    }
  }
  return answer
}
let a = solution(6, [1, 3, 2, 5, 4, 5, 2, 3])
let b = solution(4, [1, 3, 2, 5, 4, 5, 2, 3])
console.log(a, b)
