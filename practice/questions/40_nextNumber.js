function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * (common[1] / common[0])
}
let a = solution([1, 2, 3, 4, 5])
console.log(a)
