//将数组转化成树

const data1 = [
  { id: 3, pid: 1 },
  { id: 1, pid: 0 },
  { id: 2, pid: 1 },
  { id: 4, pid: 2 },
];

const res = {
  id: 1,
  pid: 0,
  children: [
    { id: 2, pid: 1, children: [{ id: 4, pid: 2 }] },
    { id: 3, pid: 1 },
  ],
};

function arrayToTree(arr, pid) {
  const tree = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === pid) {
      const node = {
        id: arr[i].id,
        pid: arr[i].pid,
        children: arrayToTree(arr, arr[i].id),
      };
      tree.push(node);
    }
  }
  return tree;
}
