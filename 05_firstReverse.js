function firstReverse(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split('');
    let result = '';
      for(let i = 1;i<=arr.length;i++){
        result += arr[arr.length-i]
      }
      return result;
    }
    