function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let strArr = str.split('')
  let decrypArr = [];

  let codeArr = strArr.map((el) => {
    if (el !== '') {
      return el.charCodeAt(0)
    }
  })
  decrypArr = codeArr.map((el) => {
    if (el !== 32) {
      if(el - secret < 97){
        return el+26-secret
      }
      return el - secret
    } else {
      return 32
    }
  })
  return String.fromCharCode(...decrypArr)
}
let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world  