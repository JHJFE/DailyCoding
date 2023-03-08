const rotatedArraySearch = function (rotated, target) {

  //   let left = 0,
  //     right = rotated.length - 1;
  
  //   while (left <= right) {
  //     let middle = parseInt((right + left) / 2);
  
  //     if (rotated[middle] === target) {
  //       return middle;
  //     }
  
  //     if (rotated[left] < rotated[middle]) {
  //       // 왼쪽 절반이 정렬되어 있는 상태
  //       if (target < rotated[middle] && rotated[left] <= target) {
  //         right = middle - 1;
  //       } else {
  //         left = middle + 1;
  //       }
  //     } else {
  //       // 오른쪽 절반이 정렬되어 있는 상태
  //       if (target <= rotated[right] && rotated[middle] < target) {
  //         left = middle + 1;
  //       } else {
  //         right = middle - 1;
  //       }
  //     }
  //   }
  
  // return -1; // 래퍼런스

  // 상단의 코드와 하단의 코드의 효율성 고민해 볼 것
 
  


  let start = 0, end = rotated.length - 1
  let middle

  while (start <= end) {
    middle = Math.ceil((start + end) / 2)

    if (target === rotated[middle]) { return middle }

    if (rotated[middle]<target && target < rotated[start]){
      start = middle +1
    }else {
      end = middle - 1
    }
  } // 이것도 비효율적인가..
  
  return -1
};
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log('결과: ', output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 1);
console.log('결과', output); // --> 4

output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log('결과: ', output); // --> 1


