function solution(s) {
  var answer = [0, 0]

  while (s !== '1') {
    let newData = s.replaceAll('0', '')
    answer[1] += s.length - newData.length
    s = newData.length.toString(2)
    answer[0] += 1
  }
  return answer
}
let a = solution('110010101001')
console.log(a)
