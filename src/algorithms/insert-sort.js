/**
 * 插入排序
 * 从第二个元素开始，和前面的元素进行比较，找到比当前元素大的位置，就停下，插入到当前位置
 */
// [29,10,14,37,15]

const insertSort = (arr) => {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let cur = arr[i]; // [10, 14,29, 37, 14] 14
    let j = i - 1; // 3 = 4 - 1

    for (let m = j; m >= 0; m--) {
      //如果当前元素 比 前面的元素小， 前面的元素向后移动位置, 同时把当前元素插入到当前位置
      if (cur < arr[m]) {
        arr[m + 1] = arr[m];
        arr[m] = cur;
      } else {
        //如果当前元素 比 前面的元素大， 当前元素插入到该位置，停止循环
        arr[m + 1] = cur;
        break;
      }
    }
  }
  return arr;
};

export { insertSort };
