const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let start = 0, end = arr.length - 1
    let mid = 0

    while (start <= end) {
        mid = parseInt((end + start) / 2)
        console.log(mid, start, end)

        if (arr[mid] === target) return mid

        if (arr[mid] < target) { // 타겟이 오른쪽에
            start = mid +1
        } else { //  타겟 왼쪽
            end = mid - 1
        }
    }
    return -1
};
let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1