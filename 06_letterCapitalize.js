function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split(' ');
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        arr[i] = arr [i][0].toUpperCase() + arr[i].substr(1);
       
      }
    }
    return arr.join(' ')
  }