const mergeSort = function (arr) {

    if (arr.length === 1) return arr

    let left = arr.slice(0, Math.floor(arr.length / 2))
    let right = arr.slice(Math.floor(arr.length / 2))
   
    return merging(mergeSort(left),mergeSort(right))

    function merging(left, right) {
        const merged = [];
        let l=left.slice(), r = right.slice()

        while(l.length !==0 && r.length !==0){
            l[0] <= r[0] ? merged.push(l.shift()) : merged.push(r.shift())
        }

        if(l.length >=1) return [...merged,...l]
        if(r.length >=1) return [...merged,...r]
        
        return merged
    }
};
let output = mergeSort([3, 4, 1, 55, 9, 33, 21]);
console.log(output); // --> [1, 3, 21]