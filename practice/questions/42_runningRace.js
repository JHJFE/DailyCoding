function solution(players, callings) {
  let answer = players.slice(),
    temp
  let dataIdx = {}
  players.map((el, idx) => (dataIdx[el] = idx))

  callings.map((call) => {
    const idx = dataIdx[call]
    temp = answer[idx - 1]
    answer[idx - 1] = call
    answer[idx] = temp
    dataIdx[call] = idx - 1
    dataIdx[temp] = idx
  })
  return answer
}
//["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]

let a = solution(
  ['mumu', 'soe', 'poe', 'kai', 'mine'],
  ['kai', 'kai', 'mine', 'mine']
)
console.log(a)
