let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // let queue = [node];
  // const values = [];
  // while (queue.length > 0) {
  //   const head = queue[0];
  //   queue = queue.slice(1);

  //   values.push(head.value);

  //   head.children.forEach((child) => queue.push(child));
  // }
  // return values;
  let search = [node];
  let temp = []
  let result = []
 
  while(search.length !== 0){ // 탐색할게 없을 때 까지
    search.map((el)=>{ // 탐색 배열
      result.push(el.value) // 값 저장
      el.children.map(el=>temp.push(el)) // 탐색배열의 새로운 요소를 담은 배열 temp
    })
    search = [...temp] // 옮김
   
    temp = [] // 옮기는 변수 초기화
   
  }
  return result
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]