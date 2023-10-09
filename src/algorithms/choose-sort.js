/**
 * 选择排序
 * 从第一个元素开始，和后面的元素进行比较，如果找到更小的值， 将该值作为最小值，循环结束后交换位置
 *
 */

const chooseSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]; //当前循环的最小值
    let p = i; //保存最小值的位置
    //找到后续的最小值
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < cur) {
        cur = arr[j]; // 更改当前循环的最小值
        p = j;
      }
    }
    //交换位置
    [arr[i], arr[p]] = [arr[p], arr[i]];
  }
  return arr;
};

export { chooseSort };
