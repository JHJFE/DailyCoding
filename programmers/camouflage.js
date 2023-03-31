function solution(clothes) { //indx  0  값    1 key
    var answer = 1;
    let closet = {}
    for(let i = 0 ;i<clothes.length;i++){
        let key = clothes[i][1]
        let val = clothes[i][0]
       
        if(closet[key] === undefined) closet[key] = [] // 옷장에 옷 하나씩 거는 느낌
        
        closet[key].push(val)
    }
    for(let key in closet){// el === key
       
        answer *= (closet[key].length+1)
       
    }
    return answer-1;
}

let a = solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])
console.log(a)//5

a = solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])
console.log(a)//3