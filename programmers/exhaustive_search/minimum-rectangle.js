function solution(sizes) {
  let width = 0,
    height = 0;

  sizes.map(el => {
    if (el[0] > el[1]) {
      if (width < el[0]) {
        width = el[0];
      }
      if (height < el[1]) {
        height = el[1];
      }
    } else {
      if (width < el[1]) {
        width = el[1];
      }
      if (height < el[0]) {
        height = el[0];
      }
    }
  });

  return height * width;
}
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
