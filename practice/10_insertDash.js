function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    let input = str.split('');
    let result = [];
    let check = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (str[i] % 2 === 1) {
        if (check === 1) {
          result.push(`-${str[i]}`);
        }else{
          result.push(str[i]);
          check=1;
        }
      }else{
        result.push(str[i]);
        check =0;
      }
    }
    return result.join('');
  }
  