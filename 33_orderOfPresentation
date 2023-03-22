function orderOfPresentation(N, K) {
    // TODO: 여기에 코드를 작성합니다.
    //N의 수, K 방식의 발표순서\

    // 내가 생각한 로직

    // 참고 배열 K ==> N부터 1씩 증가한 배열 만듬[1,2,3,4,...]

    //입력배열의 첫번째 값 추출
    //  참고배열에서 해당 값의 인덱스 찾음 = pos, splice(pos,1)
    //  result pos * n! 더함

    //배열의 두번째 값 추출
    // 
    let pos = 0; // index 위치
    let result = 0 // 순서 
    let li = K.map((el, i) => i + 1)

    function fac(n) {
        if (n <= 1) {return n }
        return n * fac(n - 1)
    }

    for (let i = 0; i < K.length - 1; i++) {
        pos = li.indexOf(K[i])
        li.splice(pos, 1)
        result +=  pos * fac(N-(i+1))
        console.log('결과', result)
    }

    return result
}
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6