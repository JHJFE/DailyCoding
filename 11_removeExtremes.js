function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    let input = arr.map(n=>n.length)
    let copy = arr.slice(0)
  
    let posmax = input.lastIndexOf(Math.max(...input))
    let posmin = input.lastIndexOf(Math.min(...input))
  
    if(posmax > posmin){
      copy.splice(posmax,1)
      copy.splice(posmin,1)
    
    }else{
      copy.splice(posmin,1)
      copy.splice(posmax,1)
    }
  
    return copy
  }