function solution(progresses, speeds) {// 
    let answer = [];
    let remain,work,days=[],head,back,cnt=1;
    for(let i =0; i<progresses.length ;i++){
        remain = 100 - progresses[i]
        work = Math.ceil(remain/speeds[i])
        days.push(work)
    }
    head = days.shift()// 7

    while(days.length !== 0){
        back = days.shift() //3

        if(head >= back){
            cnt++ //2 
        }else{
            head = back
            answer.push(cnt)
            cnt=1
        }
        if(days.length===0) answer.push(cnt)
    }

    return answer;
}
//7,3,9
const a = solution([93, 30, 55],[1, 30, 5])
console.log(a)