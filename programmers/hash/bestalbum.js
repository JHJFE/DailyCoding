function solution(genres, plays) {
    let data = {}, max = [], answer = [];

    for (let i = 0; i < genres.length; i++) {
        data[genres[i]] ? data[genres[i]].total += plays[i] : data[genres[i]] = { total: plays[i], order: [] }
        data[genres[i]].order.push([i, plays[i]])
        data[genres[i]].order = data[genres[i]].order.sort((a, b) => {
            return a[1] > b[1] ? -1 :
                a[1] < b[1] ? 1 : 0
        })
        data[genres[i]].order.length === 3 ? data[genres[i]].order.pop() : null
        
    }
    // [total과 장르를 가지는 배열]
    for(let key  in data){
        max.push([key,data[key].total])
    }
    max.sort((a,b)=>{
        return a[1] > b[1] ? -1 :
        a[1] < b[1] ? 1 : 0
    })
    for(let i = 0;i<max.length;i++){
        let gen = max[i][0]
        data[gen].order.map((el)=>answer.push(el[0]))
    }
   
    return answer
}

let a = solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
console.log(a)