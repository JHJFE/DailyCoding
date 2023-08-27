function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => {
    return signs[i] === true ? acc + cur : acc - cur
  }, 0)
}
let a = solution([1, 2, 3], [false, false, true])
console.log(a) // 9
