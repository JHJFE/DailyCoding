// 시저 암호
function solution(s, n) {
  var answer = ''
  return s
    .split('')
    .map((letter) => {
      let code = letter.charCodeAt()

      if (65 <= code && code <= 90) {
        code = code + n
        code > 90 ? (code = (code % 90) + 64) : null
        return String.fromCharCode(code)
      } else if (97 <= code && code <= 122) {
        code = code + n
        code > 122 ? (code = (code % 122) + 96) : null
        console.log(code)
        return String.fromCharCode(code)
      } else return letter
    })
    .join('')
}
let a = solution('a B z', 4)
console.log(a)
