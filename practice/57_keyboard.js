function solution(keymap, targets) {
  var answer = []
  for (let i = 0; i < targets.length; i++) {
    let cnt = 0
    for (let j = 0; j < targets[i].length; j++) {
      let val = targets[i][j]
      let data = []
      for (let k = 0; k < keymap.length; k++) {
        let check = keymap[k].split('').findIndex((el) => el === val)
        check !== -1 ? data.push(check + 1) : null
      }
      if (data.length > 0) {
        cnt += Math.min(...data)
      } else {
        cnt = -1
        break
      }
    }
    answer.push(cnt)
  }
  return answer
}
let a = solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])
let b = solution(['AA'], ['B'])
// let c = solution(['AGZ', 'BSSS'], ['ASA', 'BGZ'])
console.log(a, b)
