const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = []
  for(let i = 0 ;i < arr.length-2;i++){
    for(let j =i +1; j < arr.length-1;j++){
      for(let k = j+1;k<arr.length;k++){
        result.push(arr[i]*arr[j]*arr[k])
      }
    }
  }
  console.log(result)
  let max = Math.max(...result)
  return max
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)