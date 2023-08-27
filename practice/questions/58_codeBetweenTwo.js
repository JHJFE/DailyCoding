function solution(s, skip, index) {
  var answer = [],
    i = 0
  let data = []
  while (i < 26) {
    let letter = String.fromCharCode(97 + i)
    skip.includes(letter) ? null : data.push(letter)
    i++
  }
  s.split('').map((el) => {
    let idx = (data.findIndex((val) => val === el) + index) % data.length
    answer.push(data[idx])
  })
  return answer.join('')
}
let a = solution('aukks', 'wbqd', 5)
console.log(a)
