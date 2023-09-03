// p 와 y의 개수
function solution(s) {
  let parr = ['p', 'P']
  let yarr = ['y', 'Y']
  let pcnt = 0
  let ycnt = 0
  s.split('').map((el) =>
    parr.includes(el) ? pcnt++ : yarr.includes(el) ? ycnt++ : null
  )

  return pcnt === ycnt ? true : false
}
