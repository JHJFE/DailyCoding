function solution(my_string, overwrite_string, s) {
  var answer = my_string.slice().split('')

  answer.splice(s, overwrite_string.length, overwrite_string)
  return answer.join('')
}
let a = solution('He11oWor1d', 'lloWorl', 2)
console.log(a)
