function solution(today, terms, privacies) {
  let answer = []
  let termData = {}

  for (let i = 0; i < terms.length; i++) {
    termData[terms[i].slice(0, 1)] = terms[i].slice(2)
  }
  for (let i = 0; i < privacies.length; i++) {
    let type = privacies[i].slice(-1) //약관 타입 가져옴
    let date = privacies[i].slice(0, -2).split('.')
    let expMonth = Number(date[1]) + Number(termData[type])
    let expDay = Number(date[2]) - 1
    if (expMonth > 12) {
      if (expMonth % 12 === 0) {
        date[0] = Number(date[0]) + Math.floor(expMonth / 12) - 1
      } else {
        date[0] = Number(date[0]) + Math.floor(expMonth / 12)
      }
    }
    date[1] = expMonth % 12 === 0 ? 12 : expMonth % 12
    if (expDay === 0) {
      // 1일 인 경우
      date[1] -= 1 //
      date[2] = 28
      if (date[1] === 0) {
        //1월 인 경우
        date[0] = Number(date[0]) - 1
        date[1] = 12
      }
    } else {
      date[2] = expDay
    }
    date = date.join('.')

    if (new Date(today) > new Date(date)) {
      answer.push(i + 1)
    }
  }
  return answer
}
let a = solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
)
console.log(a)
let b = solution(
  '2020.01.01',
  ['Z 3', 'D 18'],
  [
    '2019.01.01 D',
    '2019.11.15 Z',
    '2019.08.02 D',
    '2019.07.01 D',
    '2018.12.28 Z',
  ]
)

console.log(b)
