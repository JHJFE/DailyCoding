function solution(n) {
  let bit2num = n.toString(2).split('1').length

  do {
    n++
  } while (bit2num !== n.toString(2).split('1').length)

  return n
}
console.log(solution(78))
