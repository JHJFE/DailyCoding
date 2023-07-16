function solution(numbers, hand) {
  var answer = ''
  let left = [1, 4, 7]
  let right = [3, 6, 9]
  let handPos = {
    left: [0, 10],
    right: [2, 12],
  }

  numbers.map((num) => {
    if (num === 0) num = 11
    console.log(num, handPos)
    if (left.includes(num)) {
      answer += 'L'
      handPos.left = [0, num]
    } else if (right.includes(num)) {
      answer += 'R'
      handPos.right = [2, num]
    } else {
      let L =
        Math.abs(1 - handPos.left[0]) +
        Math.abs(Math.ceil(num / 3) - Math.ceil(handPos.left[1] / 3))
      let R =
        Math.abs(1 - handPos.right[0]) +
        Math.abs(Math.ceil(num / 3) - Math.ceil(handPos.right[1] / 3))
      if (L === R) {
        answer += hand.slice(0, 1).toUpperCase()
        handPos[hand] = [1, num]
      } else if (L > R) {
        answer += 'R'
        handPos.right = [1, num]
      } else {
        answer += 'L'
        handPos.left = [1, num]
      }
    }
  })
  return answer
}
let a = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')
//"LRLLLRLLRRL"
console.log(a)
let b = solution([2, 5, 8, 0, 5, 2, 8, 0], 'left')
//LRLLRRLLLRR"
console.log(b)
