//김서방을 찾아라
function solution(seoul) {
  let num = 0
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      num = i
      break
    }
  }
  return `김서방은 ${num}에 있다`
}
let a = solution(['asdf', 'Kim'])
console.log(a)
