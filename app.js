let arr = [1,2,3,4,5,6,7];
let k = 3;

k = k % arr.length;

let part1 = arr.slice(-k);
let part2 = arr.slice(0, arr.length - k);

let result = part1.concat(part2);

console.log(result);