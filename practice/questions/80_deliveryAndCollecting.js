function solution(cap, n, deliveries, pickups) {
  var answer = 0
  let hold = 0
  let stop = 0
  while (n !== 0) {
    answer += n * 2
    hold = 0
    for (let i = n - 1; i >= 0; i--) {
      if (hold + deliveries[i] <= cap) {
        hold += deliveries[i]
      } else {
        stop = i + 1
        break
      }
      if (i === 0) stop = 0
    }
    for (let i = n - 1; i >= 0; i--) {
      if (i === 0) {
        n = 0
        break
      }
      if (i >= stop) hold -= deliveries[i]
      if (hold + pickups[i] <= cap || i >= stop) {
        hold += pickups[i]
      } else {
        n = stop
        break
      }
    }
  }
  return answer
}
let a = solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]) //16
// let b = solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]) //30
console.log(a)
// console.log(b)
