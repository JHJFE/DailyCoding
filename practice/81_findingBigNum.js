function solution(numbers) {
  const answer = Array(numbers.length).fill(-1) // 사용되지 않을 경우의 -1 초기화된 배열 생성
  const stack = []
  for (let i = 0; i < numbers.length; i++) {
    console.log(stack, stack[stack.length - 1], i)
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      // number[i]가 가장 근처의 최대값인 친구들
      answer[stack.pop()] = numbers[i] // stack에 위치 값을 기억 뒀다가 사용
    }
    stack.push(i) // index 저장
  }
  return answer
}

let a = solution([5, 1, 5, 3, 6, 2])
console.log(a)
