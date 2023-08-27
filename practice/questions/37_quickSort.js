const quickSort = function (arr, transform = ( item) => item) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length <= 1) return arr // 더이상 비교할게 없을 때 리턴
    const piv = arr[0] // 배열의 첫 값 피벗.. 가운데를 하는 방법도 있던거 같음
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {// 비벗 제외한 애들 돌리기
        if (transform(arr[i]) < transform(piv)) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), piv, ...quickSort(right)] // 정렬 합쳐서 반환

};


let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]