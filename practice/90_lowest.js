function solution(arr) {
  let lowest = arr.reduce(
    (acc, cur, i) => {
      if (acc.min > cur) {
        acc.min = cur
        acc.minIndex = i
      }
      return acc
    },
    { min: arr[0], minIndex: 0 }
  )
  arr.splice(lowest.minIndex, 1)
  return arr.length === 0 ? [-1] : arr
}

let a = solution([4, 3, 2, 1])
console.log(a)
