function solution(survey, choices) {
  let answer = []
  let data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
  for (let i = 0; i < survey.length; i++) {
    let [bad, good] = survey[i].split('')
    let point = Math.abs(choices[i] - 4)
    if (choices[i] < 4) {
      data[bad] = data[bad] + point
    } else if (choices[i] > 4) {
      data[good] = data[good] + point
    }
  }
  data.R >= data.T ? answer.push('R') : answer.push('T')
  data.C >= data.F ? answer.push('C') : answer.push('F')
  data.J >= data.M ? answer.push('J') : answer.push('M')
  data.A >= data.N ? answer.push('A') : answer.push('N')
  return answer.join('')
}
let a = solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5], 'TCMA')
let b = solution(['RT'], [7], 'RCJA')
console.log(a, b)
