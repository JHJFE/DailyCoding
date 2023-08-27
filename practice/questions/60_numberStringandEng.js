function solution(s) {
  var answer = []
  let data = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  let temp = ''
  for (let val of s) {
    if (/[a-zA-Z]/.test(val)) {
      temp += val

      if (data[temp] >= 0) {
        answer.push(`${data[temp]}`)
        temp = ''
      }
    } else {
      answer.push(val)
    }
  }
  return Number(answer.join(''))
}
let a = solution('12312zero3')
console.log(a)
