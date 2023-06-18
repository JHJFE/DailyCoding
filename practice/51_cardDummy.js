function solution(cards1, cards2, goal) {
  var answer = ''
  for (let i = 0; i < goal.length; i++) {
    let card1 = cards1[0]
    let card2 = cards2[0]
    if (card1 === goal[i]) {
      cards1.shift()
    } else if (card2 === goal[i]) {
      cards2.shift()
    } else {
      return 'No'
    }
  }
  return 'Yes'
}
let a = solution(
  ['i', 'drink', 'water'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water']
)
let b = solution(
  ['i', 'water', 'drink'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water']
)
console.log(a, b)
