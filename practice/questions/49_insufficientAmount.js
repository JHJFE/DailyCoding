function solution(price, money, count) {
  var answer = 0
  for (let i = 1; i <= count; i++) {
    answer += i * price
  }
  return answer - money >= 0 ? answer - money : 0
}

let a = solution(3, 18, 3)
console.log(a)
