function solution(phone_number) {
  return [
    ...new Array(phone_number.length - 4).fill('*'),
    ...phone_number.slice(-4),
  ].join('')
}
