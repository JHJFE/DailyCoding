function solution(N, stages) {
  let members = stages.length
  let data = {}
  let rateData = {}
  for (let i = 0; i < stages.length; i++) {
    data[stages[i]] ? data[stages[i]]++ : (data[stages[i]] = 1)
  }
  for (let i = 1; i <= N; i++) {
    if (data[i]) {
      rateData[i] = data[i] / members
      members -= data[i]
    } else rateData[i] = 0
  }
  return Object.keys(rateData)
    .sort((a, b) => rateData[b] - rateData[a])
    .map((el) => +el)
}
let a = solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
let b = solution(4, [4, 4, 4, 4])
console.log(a, b)
// [3,4,2,1,5]
// [4,1,2,3]
