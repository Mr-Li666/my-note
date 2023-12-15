/**
 * 固定高度的虚拟列表
 */

import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export default function List({ children, containerHeight, data, itemHeight }) {
  const Children = children;
  // console.log(Children);

  const contentHeight = data.length * itemHeight;
  const [top, setTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [renderItems, setRenderItems] = useState([]); //继续需要渲染的item索引有哪些

  useEffect(() => {
    console.log('scrollTop', scrollTop);

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.floor((scrollTop + containerHeight) / itemHeight);

    const top = itemHeight * startIndex;
    setTop(top);
    console.log(startIndex, endIndex, top);

    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
      data[i] &&
        items.push(
          <div key={data[i].key} style={{ height: itemHeight }}>
            {children(data[i])}
          </div>,
        );
    }

    setRenderItems(items);
  }, [scrollTop, data]);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
    // flushSync(() => {
    //   setScrollTop(e.target.scrollTop);
    // });
  };
  return (
    <div
      className="my-virtual-list"
      style={{
        height: containerHeight,
        overflow: 'auto',
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: contentHeight,
        }}
      >
        <div style={{ height: top }}></div>
        <div>{renderItems}</div>
      </div>
    </div>
  );
}
