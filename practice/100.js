//수박수박수
function solution(n) {
  var answer = new Array(n).fill(false)
  return answer.map((el, idx) => (idx % 2 === 0 ? '수' : '박')).join('')
}
