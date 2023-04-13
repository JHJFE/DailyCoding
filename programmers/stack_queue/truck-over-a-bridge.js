function solution(bridge_length, weight, truck_weights) {
  // bridge_length : 다리 길이
  // weigth : 다리가 감당할 수 있는 최대 무게
  // truck_weights : 다리를 지나가려 대기 중인 트럭들
  const num = truck_weights.length;
  let drivingTime = [], ing=[]
  let time = 0,
    check = 0,
    onWeight = 0;
    next = truck_weights[0] // 7
  let done = 0;

  while(done !== num){// t
    time++
    if(bridge_length === time - drivingTime[0]){
        done++
        onWeight -= ing.shift()
        drivingTime.shift()  
    }

    check = onWeight + next // 7

    if(check <= weight){ // 7 < 10
        ing.push(truck_weights[0])
        onWeight += truck_weights.shift()
        drivingTime.push(time)
        next = truck_weights[0]
    }
  }
  return time
}
let a;
a = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
console.log(a);
a = solution(2, 10, [7, 4, 5, 6]);
console.log(a);
