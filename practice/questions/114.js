//피보나치 수
function solution(n) {
  let fi = [0, 1]
  let next = 0
  for (let i = 2; i <= n; i++) {
    next = (fi[0] + fi[1]) % 1234567
    fi[0] = fi[1]
    fi[1] = next
  }
  return next % 1234567
}
