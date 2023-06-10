function solution(name, yearning, photo) {
  let answer = []
  let board = {}
  for (let i = 0; i < name.length; i++) {
    board[name[i]] = yearning[i]
  }
  photo.map((memorys) => {
    let score = 0
    memorys.map((el) => {
      if (board[el]) {
        score += board[el]
      }
    })
    answer.push(score)
  })
  return answer
}
let a = solution(
  ['may', 'kein', 'kain', 'radi'],
  [5, 10, 1, 3],
  [
    ['may', 'kein', 'kain', 'radi'],
    ['may', 'kein', 'brin', 'deny'],
    ['kon', 'kain', 'may', 'coni'],
  ]
)
console.log(a)
