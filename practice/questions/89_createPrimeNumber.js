const { formatDiagnosticsWithColorAndContext } = require('typescript')

function solution(nums) {
  var answer = 0
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let val = nums[i] + nums[j] + nums[k]
        console.log(val, Math.floor(Math.sqrt(val)))
        let check = true
        for (let p = 2; p <= Math.floor(Math.sqrt(val)); p++) {
          if (val % p === 0) {
            console.log(val, p)
            check = false
            break
          }
        }
        if (check) answer++
      }
    }
  }
  return answer
}
let a = solution([1, 2, 3, 4])
console.log(a)
