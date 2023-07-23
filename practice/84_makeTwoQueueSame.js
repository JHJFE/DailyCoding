function solution(queue1, queue2) {
  var answer = 0
  let que1 = queue1.reduce((acc, cur) => acc + cur)
  let que2 = queue2.reduce((acc, cur) => acc + cur)
  while (que1 === que2) {}
  return answer
}
let a = solution([3, 2, 7, 2], [4, 6, 5, 1])
let b = solution([1, 2, 1, 2], [1, 10, 1, 2])
//2,7
console.log(a, b)
