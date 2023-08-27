function solution(s) {
  if (s.length === 1) {
    return 1
  }
  var answer = 0
  let same = 1,
    diff = 0
  let stand = s[0]
  for (let i = 1; i < s.length; i++) {
    if (stand === s[i]) {
      same++
    } else {
      diff++
    }
    if (same === diff || i + 1 === s.length) {
      answer++
      same = 0
      diff = 0
      stand = s[i + 1]
    }
  }
  return answer
}
let a = solution('abracadabra')
let b = solution('aaabbaccccabba')
console.log(a, b)
