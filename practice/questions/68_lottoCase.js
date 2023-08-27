function solution(lottos, win_nums) {
  var answer = {}
  let best = 0,
    worst = 0
  win_nums.map((num) => (answer[num] = true))
  lottos.map((num) => {
    if (num === 0) {
      best++
    } else if (answer[num]) {
      best++
      worst++
    }
  })
  if (best === 0) best++
  if (worst === 0) worst++
  best = 7 - best
  worst = 7 - worst
  return [best, worst]
} // 6개 일치 - 1등, 5개 - 2등, 4개 - 3등, 3개 - 4등, 2개 - 5등, 그외 - 6등

let a = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
console.log(a) //[3,5]

let b = solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
console.log(b) //[1,6]

let c = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
console.log(c) //[1,1]
