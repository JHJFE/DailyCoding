function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-._]+/g, '')
    .replace(/\.{2,}/g, '.')
  answer.slice(-1) === '.' ? (answer = answer.slice(0, -1)) : null
  answer.slice(0, 1) === '.' ? (answer = answer.slice(1)) : null
  answer === '' ? (answer = 'a') : null
  if (answer.length > 15) {
    answer = answer.slice(0, 15)
    answer.slice(-1) === '.' ? (answer = answer.slice(0, -1)) : null
  }
  if (answer.length <= 2) {
    while (answer.length <= 2) {
      answer += answer.slice(-1)
    }
  }
  return answer
}
//   console.log('확인', answer)
let a = solution('...!@BaT#*..y.abcdefghijklm')
let b = solution('.abc.....n.p.')
let c = solution('z-+.--12309_--__^.....')
let d = solution('=.=-_{}[]()//')
console.log(a, '\n', b, '\n', c, '\n', d)
