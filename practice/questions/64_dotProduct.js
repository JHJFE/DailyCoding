function solution(a, b) {
  return a.reduce((acc, cur, i) => {
    return acc + cur * b[i]
  }, 0)
}
let a = solution([1, 2, 3, 4], [-3, -1, 0, 2])
let b = solution([-1, 0, 1], [1, 0, -1])
console.log(a, b)
