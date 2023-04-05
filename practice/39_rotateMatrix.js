const rotateMatrix = function (matrix, num = 1) {
    // TODO: 여기에 코드를 작성합니다.
    if (matrix.length === 0) return [] // 빈배열 
    const time = num % 4 // 회전 횟수
    let m, n
    m = matrix[0].length; //행 길이
    n = matrix.length; // 열 길이

    const rotateM = []
    if (time === 0) return matrix

    let row = m, col = n;
    if(time === 2) { // m n 을 따로 값을 가지면서 반복문을 위한 m * n --> n*m 로 값 넣을 지 내비둘지 결정
        row = n
        col = m
    } 

    for (let i = 0; i < row; i++) {
        rotateM[i] = []
        for (let j = 0; j < col; j++) {
            rotateM[i][j] = time === 1 ? matrix[n - 1 - j][i] :
                time === 2 ? matrix[n - 1 - i][m - 1 - j] :
                    time === 3 ? matrix[j][m - 1 - i] : null
            //rotateM[i][j] = matrix[n-1-j][i] // 90
            // 180 행 열 모두 이동 matrix[n - j - 1][m-1-i]
            // 270 열 만 이동 matrix[j][m-1-i]
            // 나중에 해당 공식이 맞는지 확인해볼것 ==> 맞음
        }
    }
    return rotateM
};

const matrix = [// 4*4
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
    [13, 14, 15],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix, 2);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[2][2]); // --> 8