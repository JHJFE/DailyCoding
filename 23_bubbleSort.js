const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sortArr = arr.slice()
    let temp = 0
    let check = 0;
    for (let i = 0; i < sortArr.length - 1; i++) {
      
      for (let j = 0; j < sortArr.length - 1 - i; j++) { //첫 로직에서 처음부터 끝까지 반복 되고 마지막에는 첫 번째와 두번째 값을 마지막 비교후 종료
        if (sortArr[j] > sortArr[j + 1]) {
  
          temp = sortArr[j]
          sortArr[j] = sortArr[j + 1]
          sortArr[j + 1] = temp
          check = 1;
        }
      }
      if(check === 0){
        break
      }else{
        check = 0
      }
    }
    return sortArr
  };
  
  let output = bubbleSort([5,4,3,2,1]);
console.log(output); // --> [1, 2, 3]