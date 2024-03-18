function solution(friends, gifts) {
  //friends 친구들 이름
  // gifts 친구들의 선물을 주고 받은 기록  a가 b 에게 줌
  //["muzi", "ryan", "frodo", "neo"]	["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]	2
  // 아직 수정이 필요함
  var answer = 0
  let table = {}
  friends.forEach((v) => {
    table[v] = { idx: 0, n: 0 }
    for (let i = 0; i <= friends.length - 1; i++) {
      if (friends[i] != v) table[v][friends[i]] = 0
    }
    햣
  })

  gifts.forEach((data) => {
    let giver = data.split(' ')[0]
    let receiver = data.split(' ')[1]
    table[giver][receiver] >= 0 ? table[giver][receiver]++ : false
    table[giver].idx++
    table[receiver].idx--
  })
  let max = 0
  for (let i = 0; i <= friends.length - 1; i++) {
    let n = []
    let gcnt = table[friends[i]] //muzi
    for (let j = i + 1; j <= friends.length - 1; j++) {
      let rcnt = table[friends[j]] //ryan
      console.log(gcnt[friends[j]], rcnt[friends[i]])
      if (gcnt[friends[j]] > rcnt[friends[i]]) {
        gcnt.n++
      } else if (gcnt[friends[j]] < rcnt[friends[i]]) {
        rcnt.n++
      } else if (gcnt.idx > rcnt.idx) {
        gcnt.n++
      } else if (gcnt.idx < rcnt.idx) {
        rcnt.n++
      }
    }

    if (gcnt.n > max) max = gcnt.n
  }

  return max // 가장 많이 받는 선물 개수
}
let a = solution(
  ['muzi', 'ryan', 'frodo', 'neo'],
  [
    'muzi frodo',
    'muzi frodo',
    'ryan muzi',
    'ryan muzi',
    'ryan muzi',
    'frodo muzi',
    'frodo ryan',
    'neo muzi',
  ]
)
console.log(a)
