function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = true
    arr.reduce((acc,cur) => {
      return acc>= cur ? result = false : acc+cur
    })
    return result
  }
  
  let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false