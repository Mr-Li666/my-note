import { Card, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

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
    <div className="list-child " ref={ref}>
      {idx === 0 ? (
        <div>
          <div className="search mb-[8px] sticky">
            <Input className="w-[600px]" placeholder="帖子搜索" />
          </div>
          <div
            className=" p-3 cursor-pointer rounded-xl w-[600px]"
            style={{
              // height: data?.height || 20,
              backgroundColor: idx % 2 === 0 ? 'burlywood' : 'cadetblue',
            }}
          >
            <div className="content flex  justify-between">
              <div className="">
                <div className="content-title text-lg font-semibold">标题：title</div>
                {data.age > 0.5 ? (
                  <div>
                    <div>{data.name}</div>
                    <div>{data.age}</div>
                    <div>{data.address}</div>
                  </div>
                ) : null}
              </div>
              {data.age > 0.7 ? (
                <div className="content-img">
                  <img
                    className=" block w-[72px] h-[72px]"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt=""
                  />
                </div>
              ) : null}
            </div>
            <div className="info flex text-sm mt-[8px] justify-between">
              <div className="">作者：lihao08</div>
              <div className="flex">
                <div className="mr-[8px]">浏览:1024</div>
                <div>评论:1024</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" p-3 cursor-pointer rounded-xl w-[600px]"
          style={{
            // height: data?.height || 20,
            backgroundColor: idx % 2 === 0 ? 'burlywood' : 'cadetblue',
          }}
        >
          <div className="content flex  justify-between">
            <div className="">
              <div className="content-title text-lg font-semibold">标题：title</div>
              {data.age > 0.5 ? (
                <div>
                  <div>{data.name}</div>
                  <div>{data.age}</div>
                  <div>{data.address}</div>
                </div>
              ) : null}
            </div>
            {data.age > 0.7 ? (
              <div className="content-img">
                <img
                  className=" block w-[72px] h-[72px]"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div className="info flex text-sm mt-[8px] justify-between">
            <div className="">作者：lihao08</div>
            <div className="flex">
              <div className="mr-[8px]">浏览:1024</div>
              <div>评论:1024</div>
            </div>
          </div>
        </div>
      )}
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
    getData();
  }, []);

  const getData = () => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push({
          key: i,
          name: i,
          age: Math.random(),
          address: 'address address address',
          height: Math.random() * 100 + 50,
          // height: 80,
        });
      }
      setData([...data, ...arr]);
    }, 500);
  };

  const getItemHeight = (idx) => {
    return allHeightsList[idx] || 50;
  };

  return (
    <div className="virtual-list">
      {/* <div className="search mb-[8px] sticky">
        <Input className="w-[600px]" />
      </div> */}
      <VirtualListAutoH
        data={data}
        // containerHeight={300}
        containerHeight={
          (document.querySelector('.ant-layout-content')?.clientHeight || 72) - 72
        }
        getItemHeight={getItemHeight}
        allHeightsList={allHeightsList}
        scrollFunc={(e) => {
          // console.log(
          //   '(e.target.scrollTop',
          //   e.target.scrollTop,
          //   document.querySelector('.virtual-list')?.clientHeight,
          //   document.querySelector('.my-virtual-list2-container')?.scrollHeight,
          // );
          if (
            e.target.scrollTop + document.querySelector('.virtual-list')?.clientHeight >=
            document.querySelector('.my-virtual-list2-container')?.scrollHeight - 200
          ) {
            console.log('到底了, 加载新数据');
            getData();
          }
        }}
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
