//[1차] 캐쉬
function solution(cacheSize, cities) {
  var answer = 0
  let cache = []
  cities.map((el) => {
    let info = cache.findIndex((val) => val === el.toLowerCase())
    if (info < 0) {
      answer += 5
    } else {
      answer++
      cache.splice(info, 1)
    }
    cache.unshift(el.toLowerCase())
    if (cache.length > cacheSize) cache.pop()
  })

  return answer
}
let a = solution(3, [
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
])
console.log(a)
//hit => 1 , miss => 5
// miss,miss,miss,miss,miss,hit,hit,hit,hit,hit
// 5 10 15 20 25
