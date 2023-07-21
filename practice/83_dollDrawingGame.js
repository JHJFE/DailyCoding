function solution(board, moves) {
  var answer = 0
  let box = []
  for (let i = 0; i < moves.length; i++) {
    let pos = moves[i] - 1
    for (let j = 0; j < board.length; j++) {
      if (board[j][pos] !== 0) {
        box.push(board[j][pos])
        board[j][pos] = 0
        break
      }
    }
    if (box[box.length - 1] === box[box.length - 2] && box.length >= 2) {
      box = box.slice(0, -2)
      answer++
    }
  }
  return answer * 2
}
let a = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
) //431
console.log(a)
