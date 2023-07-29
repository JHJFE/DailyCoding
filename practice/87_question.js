function solution(n, lost, reserve) {
  var answer = n - lost.length
  let data = {}

  for (let i = 0; i < reserve.length; i++) {
    data[reserve[i]] = true
  }
  lost = lost.filter((el) => {
    if (data[el]) {
      answer++
      delete data[el]
      return false
    } else return true
  })
  lost = lost.sort()
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
let a = solution(5, [1, 2, 3], [1, 3])
console.log(a)
