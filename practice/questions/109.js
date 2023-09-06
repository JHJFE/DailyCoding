function solution(s) {
  let arr = s.split(' ')
  let answer = arr.reduce(
    (acc, cur) => {
      if (acc.min > +cur) {
        acc.min = cur
      }
      if (acc.max < +cur) {
        acc.max = cur
      }
      return acc
    },
    { min: arr[0], max: arr[0] }
  )

  return `${answer.min} ${answer.max}`
}

let a = solution('-32 -1')
console.log(a)
