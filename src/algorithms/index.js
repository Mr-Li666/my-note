export * from './bubble-sort';
export * from './choose-sort';
export * from './insert-sort';
export * from './quick-sort';

//aabbcdeaaaaabbbbcdefgggg
const handleRepeatStr = (str) => {
  const obj = {};
  let maxStr = '';
  for (let i = 0; i < str.length; i++) {
    let tempStr = str[i];
    for (let j = i + 1; j <= str.length; j++) {
      if (str[j] === str[i]) {
        tempStr += str[j];
      } else {
        i = j - 1;
        obj[tempStr] = tempStr.length;
        if (tempStr.length > maxStr.length) {
          maxStr = tempStr;
        }
        break;
      }
    }
  }
  console.log(maxStr);

  return obj;
};

// console.log(handleRepeatStr('aabbcdeaaaaabbbbcdefgggggg'));

const nums1 = [1, 2, 3, 2, 1],
  nums2 = [3, 2, 1, 4, 7];

const func = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    const tempres = [];
    let aIndex = i;
    const bindex = arr2.indexOf(arr1[i]);
    if (bindex !== -1) {
      tempres.push(arr1[i]);
      for (let j = bindex; j < arr2.length; j++) {
        if (arr1[aIndex + 1] === arr2[j + 1]) {
          tempres.push(arr1[aIndex + 1]);
          aIndex++;
        } else {
          if (res.length < tempres.length) {
            res = tempres;
          }
          break;
        }
      }
    }
  }
  return res;
};

// console.log(func(nums1, nums2));
