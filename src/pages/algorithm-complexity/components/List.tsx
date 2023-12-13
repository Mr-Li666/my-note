import React, { useEffect, useState } from 'react';

export default function List({ children, containerHeight, data, itemHeight }) {
  const Children = children;
  // console.log(Children);

  const contentHeight = data.length * itemHeight;
  const [top, setTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [renderItems, setRenderItems] = useState([]);
  useEffect(() => {
    console.log(scrollTop);

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.floor((scrollTop + containerHeight) / itemHeight);

    const top = itemHeight * startIndex;
    setTop(top);
    console.log(startIndex, endIndex, top);

    // const items = data.slice(startIndex, endIndex + 1);
    // setRenderItems(items);
  }, [scrollTop]);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
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
        <div>
          {renderItems.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
