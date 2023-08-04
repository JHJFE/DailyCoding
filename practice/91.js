// 문자열 내맘대로 정렬
function solution(strings, n) {
  if (strings.length < 2) return strings

  const piv = strings[0]
  const left = []
  const right = []

  for (let i = 1; i < strings.length; i++) {
    if (strings[i][n] < piv[n]) {
      left.push(strings[i])
    } else if (strings[i][n] > piv[n]) {
      right.push(strings[i])
    } else {
      console.log(strings[i], piv)
      piv > strings[i] ? left.push(strings[i]) : right.push(strings[i])
    }
  }
  return [...solution(left, n), piv, ...solution(right, n)]
}
let a = solution(['abce', 'abcd', 'cdx'], 2)
console.log(a)
