function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let input = str.split(' ');
    let result = '';
  
    for(let i =0;i<input.length;i++){
      result += input[i].charAt(0);
    }
    return result;
  }  