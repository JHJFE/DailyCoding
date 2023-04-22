function solution(array, commands) {
  var answer = [];
  if (commands.length === 0) return [];
  for (let command of commands) {
    let newData = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b); // sort시 매개변수를 넘겨야 숫자가 문자로 인식되는 오류를 방지할 수 있음
    answer.push(newData[command[2] - 1]);
  }
  return answer;
}
let a = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(a);
