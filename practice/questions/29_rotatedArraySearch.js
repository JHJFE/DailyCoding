const rotatedArraySearch = function (rotated, target) {

  // let left = 0,right = rotated.length - 1;
  // let j = 0;

  // while (left <= right) {
  //   j++
  //   let middle = parseInt((right + left) / 2);

  //   if (rotated[middle] === target) {
  //     console.log(j)
  //     return middle;
  //   }

  //   if (rotated[left] < rotated[middle]) {
  //     // 왼쪽 절반이 정렬되어 있는 상태
  //     if (target < rotated[middle] && rotated[left] <= target) {
  //       right = middle - 1;
  //     } else {
  //       left = middle + 1;
  //     }
  //   } else {
  //     // 오른쪽 절반이 정렬되어 있는 상태
  //     if (target <= rotated[right] && rotated[middle] < target) {
  //       left = middle + 1;
  //     } else {
  //       right = middle - 1;
  //     }
  //   }
  // }

  // return -1; // 래퍼런스

  // 상단의 코드와 하단의 코드의 효율성 고민해 볼 것




  let start = 0, end = rotated.length - 1
  let middle, i = 0

  while (start <= end) {
    middle = Math.ceil((start + end) / 2)
    console.log(i)
    if (target === rotated[middle]) {
      
      return middle
    }
    console.log('미들',middle)
    if (rotated[middle] < target && target < rotated[start]) { // 탐색값이 비교값보다 크고 비교 배열의 시작값이 탐색값보다 클때 --> 왼쪽부터 검사해라
      start = middle + 1
    }
    else { // 탐새값이 비교값보다 작을 때 오른쪽 
      end = middle - 1
      if(rotated[middle] > rotated[rotated.length-1]){
        end = rotated.length -1
        start = rotated.length - 1 - rotated[rotated,length-1]//?
      }
    }
    i++
  } // 이것도 비효율적인가.. 엣지 케이스가 있을수도 있는듯 6310

  return -1
};
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log('결과: ', output); // --> 5

output = rotatedArraySearch([4, 5, 6,8,9,10,11,12,13, 0, 1, 2, 3], 1);
console.log('결과', output); // --> ?

output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log('결과: ', output); // --> 1

// 내가 짜 코든 1,2,2
//레퍼런스 2,3,2  내가 더 효율적인데?.....머지
