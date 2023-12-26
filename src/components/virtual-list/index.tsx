import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import List from './components/List';
import VariableSizeList from './components/list-auto-height';
import { VirtualListAutoH } from './components/List2';

const ListChildren = ({ data, idx, allHeightsList, onChangeAllHeightsList }) => {
  // console.log('ListChildren', allHeightsList);

  const ref = useRef<null | HTMLDivElement>(null);
  // console.log('ref:', ref.current, allHeightsRef.current);

  const getHeight = () => {
    return ref.current?.getBoundingClientRect().height;
  };
  useEffect(() => {
    if (ref.current && allHeightsList) {
      const height = getHeight();

      if (allHeightsList[idx] !== height) {
        allHeightsList[idx] = height;
        onChangeAllHeightsList([...allHeightsList]);
      }
    }
  }, [getHeight]);

  return (
    <div
      className="list-child"
      ref={ref}
      style={{
        height: data[idx]?.height || 50,
      }}
    >
      ListChildren-{idx}
    </div>
  );
};

//固定高度
// export default function VirtualList() {
//   const [data, setData] = useState([]);
//   const list = new Array(1000).fill(0).map((item, i) => i);

//   useEffect(() => {
//     const arr = [];
//     for (let i = 0; i < 500; i++) {
//       arr.push({
//         key: i,
//         name: i,
//         age: i * Math.random(),
//         address: 'address address address',
//         height: i * Math.random() * 100 + 50,
//       });
//     }
//     // const sliceArr = arr.slice(0, 12);
//     setData(arr);
//   }, []);

//   return (
//     <div className="virtual-list">
//       <List data={data} containerHeight={300} itemHeight={200}>
//         {(item) => {
//           return (
//             <div>
//               <Card size="small" title="Small size card" style={{ width: 300 }}>
//                 <p>name:{item.name}</p>
//                 <p>age:{item.age}</p>
//                 <p>address:{item.adress}</p>
//               </Card>
//             </div>
//           );
//         }}
//       </List>
//     </div>
//   );
// }

//动态高度
export default function VirtualList() {
  const [data, setData] = useState([]);

  const [allHeightsList, setAllHeightsList] = useState([]);

  // console.log('VirtualList', allHeightsRef.current);
  useEffect(() => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push({
          key: i,
          name: i,
          age: i * Math.random(),
          address: 'address address address',
          height: Math.random() * 100 + 50,
          // height: 80,
        });
      }
      setData(arr);
    }, 500);
  }, []);
  // useEffect(() => {
  //   console.log('allHeightsList', allHeightsList);
  // }, [allHeightsList]);

  const getItemHeight = (idx) => {
    return allHeightsList[idx] || 50;
  };

  return (
    <div className="virtual-list">
      <VirtualListAutoH
        data={data}
        containerHeight={300}
        getItemHeight={getItemHeight}
        allHeightsList={allHeightsList}
      >
        {({ data, idx, allHeightsList }) => {
          return (
            <ListChildren
              data={data}
              idx={idx}
              allHeightsList={allHeightsList}
              onChangeAllHeightsList={(heights) => {
                setAllHeightsList(heights);
              }}
            />
          );
        }}
      </VirtualListAutoH>
    </div>
  );
}
