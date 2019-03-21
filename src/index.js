import './less/main.less';
import MatrixToolkit from './util/toolkit';
const toolkit = new MatrixToolkit();
const arr = Array.from({length: 9}, (v, i) => i);
console.log(arr);
const shuffeArr = toolkit.shuffe(arr);
console.log(shuffeArr);