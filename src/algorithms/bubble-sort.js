/**
 * 冒泡排序
 * 从第一个元素开始，进行元素两两比较，如果元素大，就交换位置。经过一次循环，会把最大的元素交换到最后
 */
// [29,10,14,37,14]
const bubbleSort = (arr) => {
  let length = arr.length;
  //循环的次数为 length 的长度
  while (length) {
    //每次循环都会把最大的元素放到最后
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //交换位置
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }

    length--;
  }
  return arr;
};

export { bubbleSort };
