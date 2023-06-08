function solution(wallpaper) {
  let answer = []
  let start = [wallpaper.length, wallpaper[0].length]
  let end = [0, 0]
  for (let i = 0; i < wallpaper.length; i++) {
    let row = wallpaper[i].split('')
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '#') {
        start[0] > i ? (start[0] = i) : null
        start[1] > j ? (start[1] = j) : null
        end[0] < i + 1 ? (end[0] = i + 1) : null
        end[1] < j + 1 ? (end[1] = j + 1) : null
      }
    }
  }
  answer = [...start, ...end]
  return answer
}
let a = solution(['.....', '.....', '....#']) //[0, 1, 3, 4]
console.log(a)
