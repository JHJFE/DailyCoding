const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // let total = [...arr1,...arr2]
    // total.sort((a,b)=>a-b)
    // return total[k-1]
    // 이건 너무 날로..


    // let end1 = arr1.length-1, end2 = arr2.length-1
    // let start1 = 0, start2 = 0
    // mid1 = parseInt((start1 + end1)/2), mid2 = parseInt((start2+end2)/2)
    // if(arr1[mid]>arr2[mid]){
    //     if(arr2[mid]>arr1[mid-1]){
            
    //     }else{

    //     }
    // }

};

//

let arr1 = [1, 4, 8, 10, 11];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3