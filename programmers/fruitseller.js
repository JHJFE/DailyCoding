function solution(k, m, score) {
    //k 최대점수 , m 한 상자에 담기는 개수, 각 제품의 점수들이 담기 배열
    //문제가 잘 이해가 안감? --> (배열에 담긴 최저의 점수 * 한 상자의 담긴 제품 개수 m * 상자의 개수?)
    let maxnum = k, ablenum = m , arr =score.sort() // 오름차순
    //[2,3,2,3] 1 * 
    let answer = 0
    let temp = []
    let boxnum = Math.floor(arr.length/m) // 상자 개수
    let cnt = 0 
    //console.log('최저값',arr[arr.length-(boxnum*m)]) // 상자에 담긴 애들중 가장 작은 값
    //console.log('상자개수',boxnum)
    //console.log('상자크기',m)
    
    for(let i = 0;i<boxnum;i++){
        for(j = 0;j<m;j++){
            temp.push(arr.pop())
        }
        answer += temp.pop() * m
        temp = []
    }
  
    return answer;
}
console.log(solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
// 33
console.log(solution(3,4,[1, 2, 3, 1, 2, 3, 1]))
// 8