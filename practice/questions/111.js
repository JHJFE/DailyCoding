//JadenCase
function solution(s) {
  return s
    .split(' ')
    .map((el) => {
      let word = ''
      for (let i = 0; i < el.length; i++) {
        word += i === 0 ? el[i].toUpperCase() : el[i].toLowerCase()
      }
      return word
    })
    .join(' ')
}
let a = solution('3people unFollowed me')
console.log(a)
