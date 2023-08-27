// const insertionSort = function (arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 쿽소팅 한 번 구현해보자
//     if(arr.length <=1) return arr // 더이상 비교할게 없을 때 리턴
//     const piv = arr[0] // 배열의 첫 값 피벗.. 가운데를 하는 방법도 있던거 같음
//     const left = []
//     const right = []

//     for(let i =1;i<arr.length;i++){// 비벗 제외한 애들 돌리기
//         if(arr[i] < piv){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...insertionSort(left),piv,...insertionSort(right)] // 정렬 합쳐서 반환
// };

// naive solution
// const insertionSort = function (arr) {
//   let sorted = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= sorted[i - 1]) {
//       sorted.push(arr[i]);
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (arr[i] <= sorted[j]) {
//           const left = sorted.slice(0, j);
//           const right = sorted.slice(j);
//           sorted = left.concat(arr[i], right);
//           break;
//         }
//       }
//     }
//   }

//   return sorted;
// };

const insertionSort = function (arr, transform = (item) => item) {
    let sorted = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (transform(arr[i]) >= transform(sorted[i - 1])) { // 콜백함수를 적용한 입력 배열의 i 번째 값  vs  콜백 함수 적용한 정렬 배열의 끝값
        sorted.push(arr[i]);
        console.log(i,arr[i])
      } else {
        for (let j = 0; j < i; j++) {
          if (transform(arr[i]) <= transform(sorted[j])) {// 콜백함수를 적용한 입력 배열의 i 번째 값 vs sort 배열 내부에 있는 값들을 j로 돌아가면서 비교 삽입정렬 느낌
            const left = sorted.slice(0, j);
            const right = sorted.slice(j);
            sorted = left.concat(arr[i], right);
            break;
          }
        }
      }
    }
  
    return sorted;
  };
  
let output = insertionSort([9,3, 1,5,4, 21]);
console.log(output); // --> [1, 3, 21]