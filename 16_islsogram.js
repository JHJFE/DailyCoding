function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = true;
    let arr = str.toLowerCase().split('');//소문자로 바꿔서 배열 생성

    for (let i = 0; i < arr.length; i++) {
        let checkstr = arr[i] // 중복으로 있는지 확인할 문자
        let temparr = arr.slice() // 원본 훼손 방지

        temparr.splice(i, 1) // 중복확인할 문자를 제거한 문자열
        
        if (temparr.includes(checkstr)) { // 중복시 반복문 종료 후 false 저장
            result = false;
            break
        }
    }
    return result;//결과 출력
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false