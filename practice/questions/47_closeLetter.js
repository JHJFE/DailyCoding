function solution(s) {
  let arr = s.split('')
  let answer = []
  let data = {}
  for (let i = 0; i < arr.length; i++) {
    if (typeof data[arr[i]] === 'number') {
      answer.push(i - data[arr[i]])
    } else {
      answer.push(-1)
    }
    data[arr[i]] = i
  }
  return answer
}

let a = solution('fffff')
console.log(a)
