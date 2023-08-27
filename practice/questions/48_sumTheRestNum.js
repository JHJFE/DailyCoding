function solution(numbers) {
  var answer = 0

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i]
  }
  return 45 - answer
}
let a = solution([5, 8, 4, 0, 6, 7, 9])
console.log(a)
