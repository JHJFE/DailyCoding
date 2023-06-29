function solution(id_list, report, k) {
  var answer = []
  let reportList = {}
  let result = {}
  id_list.map((id) => {
    result[id] = 0
    reportList[id] = []
  })
  for (let i = 0; i < report.length; i++) {
    let [reporter, reported] = report[i].split(' ')

    if (reportList[reporter].includes(reported)) {
      // 해당 사람을 신고한적 있을 때
    } else {
      reportList[reporter].push(reported)
      result[reported]++
    }
  }
  console.log(result)
  for (let list in reportList) {
    let cnt = 0
    reportList[list].map((el) => {
      if (result[el] >= k) {
        cnt++
      }
    })
    answer.push(cnt)
  }
  return answer
}
let a = solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
)
console.log(a) //[2,1,1,0]
