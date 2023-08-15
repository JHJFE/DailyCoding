// // 주식 가격
// function solution(prices) {
//   let answer = [0]
//   let history = [prices[prices.length - 1]]
//   let min = prices.pop()
//   for (let i = prices.length - 1; i >= 0; i--) {
//     if (min < prices[i]) {
//       // 여기서 answer의 수정이 이뤄져야할 듯
//       for (let j = 0; j < history.length; j++) {
//         if (history[j] < prices[i]) {
//           answer.unshift(j + 1)
//           break
//         }
//       }
//     } else {
//       min = prices[i]
//       answer.unshift(history.length)
//     }
//     history.unshift(prices[i])
//   }
//   return answer
// }//효율성 실패

// 주식 가격
function solution(prices) {
  let answer = new Array(prices.length).fill(false)
  let temp = []
  for (let i = 0; i < prices.length - 1; i++) {
    if (temp.length > 0) {
      while (prices[i] < prices[temp.slice(-1)[0]]) {
        // 현재 값 기준으로 하락이 발생했을 때
        let pos = temp.pop()
        answer[pos] = i - pos
      }
    }
    temp.push(i)
  }

  return answer.map((el, idx) => (el ? el : answer.length - idx - 1))
}
let a = solution([1, 2, 3, 2, 3])
console.log(a)
