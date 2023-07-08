const { toASCII } = require('punycode')

function solution(n, arr1, arr2) {
  var answer = []
  for (let i = 0; i < n; i++) {
    let line1 = arr1[i] //9
    let line2 = arr2[i] //30
    let total = []

    for (let j = 0; j < n; j++) {
      let check = [line1 % 2, line2 % 2]
      if (j === 0) {
        console.log(line1, line2, 2 ** (n - j - 1), line1 < 2 ** (n - j - 1))
      }
      line1 < 2 ** (n - j - 1)
        ? (check[0] = 0)
        : (line1 = Math.floor(line1 / 2))
      line2 < 2 ** (n - j - 1)
        ? (check[1] = 0)
        : (line2 = Math.floor(line2 / 2))

      check.includes(1) ? total.unshift('#') : total.unshift(' ')
    }
    answer.push(total.join(''))
  }
  return answer
}
let a = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
console.log(a)
//0 14
//1 7
//1 3
//  1
let b = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
console.log(b)
