function ABCheck(str) {
    // code goes here
    str = str.toLowerCase();
    let arr = str.split('');
    
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === 'a') {
        if (arr[i + 4] === 'b') {
          return true
        }
      }
  
      if (arr[i] === 'b') {
        if (arr[i + 4] === 'a') {
          return true
        }
      }
    }
    return false
  }