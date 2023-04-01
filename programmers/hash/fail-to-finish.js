function solution(participant, completion) {
    let data={}
    for(let i =0;i<participant.length;i++){
        const val = data[participant[i]]
        val ? data[participant[i]] = ++data[participant[i]] : data[participant[i]] = 1
    }
    for(let i = 0;i< completion.length;i++){
        data[completion[i]] === 1 ? delete data[completion[i]] : data[completion[i]] = --data[completion[i]]
    }
    
    return Object.keys(data).pop()
}

let a = solution(["leo", "kiki", "eden"], ["eden", "kiki"])
console.log(a)
a = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])

console.log(a)