function readVertically(arr) {
    // TODO: 여기에 코드를 작성합니다.
let len  = arr.map((n)=>n.length)
let col = arr.length
let rows = Math.max(...len);
let result = ''

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {

            if(arr[j][i] !== undefined){
            result = result + arr[j][i]
            }
        }
    }
    return result
}
let input = [
    //
    'hello',
    'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
    //
    'hi',
    'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'