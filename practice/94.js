//이상한 문자 만들기
function solution(s) {
  var answer = ''
  let before = s.split(' ')
  console.log(before)
  for (let i = 0; i < before.length; i++) {
    answer +=
      before[i]
        .split('')
        .map((letter, i) => {
          if (i % 2 === 0) {
            return letter.toUpperCase()
          } else {
            return letter.toLowerCase()
          }
        })
        .join('') + ' '
  }
  return answer.slice(0, -1)
}
let a = solution('try hello world')
console.log(a)
