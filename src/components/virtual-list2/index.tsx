import React, { useEffect, useRef, useState } from 'react';

import VariableSizeList from './components/list-auto-height';

function Item({ index, data, setHeight }) {
  const itemRef = useRef();
  useEffect(() => {
    setHeight(index, itemRef?.current.getBoundingClientRect().height);
  }, [setHeight, index]);

  return (
    <div
      ref={itemRef}
      style={{
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue',
        height: data[index].height,
      }}
    >
      {data[index].name}
    </div>
  );
}

export function VirtualList() {
  const [list, setList] = useState([]);
  const listRef = useRef();

  const heightsRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      const arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push({
          key: i,
          name: i,
          age: i * Math.random(),
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
    <>
      列表项高度动态 - 虚拟列表实现
      <VariableSizeList
        ref={listRef}
        containerHeight={300}
        getItemHeight={getHeight}
        data={list}
      >
        {({ index, data }) => {
          return <Item index={index} data={data} setHeight={setHeight} />;
        }}
      </VariableSizeList>
    </>
  );
}
