/**
 * 快速排序
 * 取一个基准值，找到比基准值小的所有值，存为一个数组； 找到比基准值大的，存为一个数组；
 * 从小值数组中再找基准值，重复上面过程
 */
//[29, 10, 14, 37, 15, 1, 30]
const quickSort = (arr) => {
  if (arr.length <= 1) return arr; //结束递归

  let baseVal = arr[0]; //基准值
  let smallArr = []; //用于存储比基准值小的
  let bigArr = []; //用于存储比基准值大的
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= baseVal) {
      smallArr.push(arr[i]);
    } else {
      bigArr.push(arr[i]);
    }
  }
  let arr1 = quickSort(smallArr);
  let arr2 = quickSort(bigArr);
  console.log(arr1, arr2);
  // bigArr = quickSort(bigArr);
  return [...arr1, baseVal, ...arr2];
};

export { quickSort };
