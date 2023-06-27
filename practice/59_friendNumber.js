function solution(X, Y) {
  var answer = ''
  let container = []
  let data = {}
  for (let val of X) {
    data[val] ? (data[val] += 1) : (data[val] = 1)
  }
  for (let val of Y) {
    if (data[val]) {
      container.push(val)
      data[val] -= 1
      if (data[val] === 0) {
        delete data[val]
      }
    }
  }
  container.sort((a, b) => b - a)
  console.log(container)
  return container[0] === '0'
    ? '0'
    : container.length === 0
    ? '-1'
    : container.join('')
}
let a = solution('100', '203045')
console.log(a)
