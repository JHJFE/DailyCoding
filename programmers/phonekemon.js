function solution(nums) { // nums의 길이가 10000일수도 있는거라 생각 잘하긴 해야할 듯
    var answer = 0;
    // includes
    const keys = nums.reduce((acc, cur) => {
        let arr = []
        arr = Array.isArray(acc) ? [...acc] : [acc]
        return arr.includes(cur) ? arr : [...arr, cur]
    })
    
    return keys.length > (nums.length/2) ? nums.length/2 : keys.length
}

let a = solution([3, 3, 3, 2, 2, 4])
console.log(a)//3
a = solution([3, 1, 2, 3])
console.log(a)//2