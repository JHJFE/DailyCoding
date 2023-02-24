let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    //1 2 3 5 8 13? 21?
    
      if (n <= 1) {
          return n;
      }
      return Math.round((1/Math.sqrt(5)) * (Math.pow(((1+Math.sqrt(5))/2),n+1)  -  Math.pow(((1-Math.sqrt(5))/2),n+1)))
  };
  