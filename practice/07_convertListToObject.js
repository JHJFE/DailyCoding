function convertListToObject(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {};
    for(let i =0;i<arr.length;i++){
      let [key,value] = arr[i];
      if(!(key in result) && arr[i].length > 0){
      result[key] = value;
      }
    }
    return result;
  }