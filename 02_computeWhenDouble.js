function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
   let rate = 1 + interestRate/100;
   let money = 1;
    let count  = 0

    while (money < 2) {
        money = money * rate;
        count ++
    }
    return count;

  }
  output = computeWhenDouble(100);
console.log(output); // --> 8