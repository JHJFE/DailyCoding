function solution(number, limit, power) {
    // 기사 단원의 수 number, 제한수치 limit, 제한수치 초과한 무기 공격력? power
    // 숫자의 약수의 개수 확인
    // 약수의 개수가 넘어가는 거 고르는 경우 제한 수 고름
    if (number === 1) return 1
    let answer = 1, cnt = 0
    for (let i = 2; i <= number; i++) {

        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                cnt += 1
                if(i / j !== j) cnt+=1
            }
            if (cnt > limit) {
                cnt = power
                break
            }
        }
  
        answer += cnt
        cnt = 0;
    }
    return answer;
}
console.log(solution(5, 3, 2))