import React, { useEffect, useRef, useState } from 'react';

import VariableSizeList from './components/list-auto-height';

function Item({ index, data, setHeight }) {
  const itemRef = useRef();
  useEffect(() => {
    setHeight(index, itemRef?.current?.getBoundingClientRect()?.height);
  }, [setHeight, index]);

  return (
    <div
      ref={itemRef}
      style={{
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue',
        // height: data[index].height,
      }}
      className="p-3 cursor-pointer rounded-xl w-[600px]"
    >
      <div className="content flex  justify-between">
        <div className="">
          <div className="content-title text-lg font-semibold">标题：title</div>
          {data[index].age > 0.5 ? (
            <div>
              <div>{data[index].name}</div>
              <div>{data[index].age}</div>
              <div>{data[index].address}</div>
            </div>
          ) : null}
        </div>
        {data[index].age > 0.7 ? (
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
  );
}

export function VirtualList() {
  const [list, setList] = useState([]);
  const listRef = useRef();

  const heightsRef = useRef([]);

  // console.log(document.querySelector('.ant-layout-content')?.clientHeight);

  useEffect(() => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push({
          key: i,
          name: i,
          age: Math.random(),
          address: 'address address address',
          height: i * Math.random() * 20 + 50,
        });
      }
      setList(arr);
    }, 500);
  }, []);

  const getHeight = (index) => {
    return heightsRef.current[index] || 50; // 预估高度50
  };

  const setHeight = (index, height) => {
    if (heightsRef.current[index] !== height) {
      heightsRef.current[index] = height;
      // 让 VariableSizeList 组件更新高度
      listRef.current.resetHeight();
    }
  };

  return (
    <div className="VariableSizeList">
      <div className="h-[40px]">列表项高度动态 - 虚拟列表实现</div>

      <VariableSizeList
        ref={listRef}
        containerHeight={
          (document.querySelector('.ant-layout-content')?.clientHeight || 72) - 72
        }
        getItemHeight={getHeight}
        data={list}
      >
        {({ index, data }) => {
          return index === 0 ? (
            <div>
              <Item index={index} data={data} setHeight={setHeight} />;
            </div>
          ) : (
            <Item index={index} data={data} setHeight={setHeight} />
          );
        }}
      </VariableSizeList>
    </div>
  );
}
