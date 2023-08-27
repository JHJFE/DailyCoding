function solution(park, routes) {
  let start = []
  let block = []
  let condition = [park.length - 1, park[0].length - 1]
  let direction = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  }

  for (let i = 0; i < park.length; i++) {
    let row = park[i].split('')
    for (let j = 0; j < row.length; j++) {
      row[j] === 'S'
        ? (start = [i, j])
        : row[j] === 'X'
        ? block.push([i, j])
        : null
    }
  }

  for (let i = 0; i < routes.length; i++) {
    let valid = true
    let action = routes[i].slice(0, 1)
    let move = direction[action].map((el) => el * routes[i].slice(2))
    temp = [move[0] + start[0], move[1] + start[1]]
    let isBlock, fix

    if (
      condition[0] >= temp[0] &&
      temp[0] >= 0 &&
      condition[1] >= temp[1] &&
      temp[1] >= 0
    ) {
      if ('E' === action) {
        isBlock = [start[1], temp[1]]
        fix = 0
        check = 1
      } else if ('W' === action) {
        isBlock = [temp[1], start[1]]
        fix = 0
        check = 1
      } else if ('S' === action) {
        isBlock = [start[0], temp[0]]
        fix = 1
        check = 0
      } else if ('N' === action) {
        isBlock = [temp[0], start[0]]
        fix = 1
        check = 0
      }
      for (let j = 0; j < block.length; j++) {
        if (
          isBlock[0] <= block[j][check] &&
          block[j][check] <= isBlock[1] &&
          block[j][fix] === start[fix]
        ) {
          valid = false
          break
        }
      }
    } else {
      valid = false
    }
    if (valid) {
      start = temp
    }
  }
  return start
}

let a = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1', 'N 1'])
console.log(a) //[2,1]
let b = solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1'])
console.log(b) //[0,1]
let c = solution(['OSO', 'OOX', 'OOO', 'OOO'], ['E 1', 'S 2', 'W 1'])
console.log(c) //[0,0]
