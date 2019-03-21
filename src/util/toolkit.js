class MatrixToolkit {

  createCol(v) {
    return new Array(9).fill(v);
  }

  createRow(v = 0) {
    return Array.from({ length: 9 }, () => createCol(v));
  }
/**
 * fisher-yates洗牌算法
 * @param {*} array
 * 
 */
  shuffe(array) {
    const len = array.length;
    const endIndex = len - 2;
    for (let i = 0; i <= endIndex; i++) {
      const j = i + Math.floor(Math.random() * len - i);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
export default MatrixToolkit;