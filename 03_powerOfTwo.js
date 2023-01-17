function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  let check = num
  while(check %2=== 0 ){
    check = check/2;
  }
  return check === 1
}
