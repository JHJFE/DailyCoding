const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    //     let isIncluded = false;

    //     for(let i = 0;i<sample.length;i++){
    //         isIncluded = false
    //         for(let j = 0; j < base.length;j++){
    //           if(sample[i] === base[j]){
    //             isIncluded = true
    //             break;
    //           }
    //         }
    //         if(!isIncluded){
    //           return false
    //         }      
    //     }
    //   return true
    base.sort((a, b) => a - b) // 베이스 정렬
    sample.sort((a, b) => a - b) // 샘프 정렬

    for (let i = 0; i < sample.length; i++) {
        let start = 0, end = base.length - 1
        let mid = 0, isIncluded = false
        let target = sample[i]

        while (start <= end) { // 탐색의 시작점보다 끝 점이 앞에 있을 때 탈출
            mid = parseInt((start + end) / 2)// 탐색 범위의 중간 값
            // 탐색 범위의 중간과 비교
            
            if (target === base[mid]) { // 중값값이 타겟일 때
                
                isIncluded = true
                break;
            } else { // 타겟이 중간값보다 크면 중간이후부터 탐색 범위 조정,  타켓이 중값값보다 작으면 탐색 범위 중간값 이전으로 조정
                if (target > base[mid]) {
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            }// 

        }
        if (!isIncluded) {
            return false
        }
        isIncluded = false
    }
    return true
};


let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
