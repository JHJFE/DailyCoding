function solution(n, lost, reserve) {
  var answer = n - lost.length
  let data = {}

  for (let i = 0; i < reserve.length; i++) {
    data[reserve[i]] = true
  }
  console.log(data)
  for (let i = 0; i < lost.length; i++) {
    if (data[lost[i] - 1]) {
      answer++
      data[lost[i] - 1] = false
    } else if (data[lost[i] + 1]) {
      answer++
      data[lost[i] + 1] = false
    }
  }
  return answer
}
let a = solution(5, [2, 4], [3])
console.log(a)
