const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split('')
    let open = ['(', '{', '[']
    let close = [')', '}', ']']

    let result = []
    let match = ''
    
    for (let el of arr) {
        if (open.includes(el)) {
            result.push(el)
        } else if (close.includes(el)) {
            match = result.pop()
            switch (el) { // ({
                case ')':
                    if (match !== '('){return false}
                        break

                case '}':
                    if (match !== '{'){return false}
                        break

                case ']':
                    if (match !== '['){return false}
                        break
            }
        }
    }
    console.log(result)
    return result.length === 0

};
let output = balancedBrackets('({)))))((())))}');
console.log(output); // --> false

output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output3); // --> false