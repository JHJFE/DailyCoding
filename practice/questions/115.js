//짝지어 제거하기
//split("") 또한 생각보다 실행시간을 많이 사용함
function solution(s) {
  let stack = []
  for (let letter of s) {
    letter === stack.slice(-1).pop() ? stack.pop() : stack.push(letter)
  }
  return stack.length === 0 ? 1 : 0
}
let a = solution('baabaa')
console.log(a)

let b = solution('cdcd')
console.log(b)
