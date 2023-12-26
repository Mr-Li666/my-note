/**
 * 动态高度的虚拟列表
 */

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const VirtualListAutoH = ({
  containerHeight,
  data,
  children,
  getItemHeight,
  allHeightsList,
}) => {
  const Children = children;

  const [scrollTop, setScrollTop] = useState(0);
  const [allHeights, setAllHeights] = useState([]);

  const [renderItems, setRenderItems] = useState([]);

  const getAllHeights = (data) => {
    //每一项的高度是前一项的累加和
    const heights = [];
    for (let i = 0; i < data.length; i++) {
      let beforeHeight = 0;
      if (i > 0) {
        beforeHeight = heights[i - 1];
      }
      heights[i] = (getItemHeight(i) || 0) + beforeHeight;
    }
    setAllHeights(heights);
  };

  useEffect(() => {
    getAllHeights(data);
  }, [data, allHeightsList]);

  useEffect(() => {
    //获取实际渲染的元素

    const startIndex = allHeights.findIndex((item) => item > scrollTop);
    let endIndex = allHeights.findIndex((item) => item > scrollTop + containerHeight);
    if (endIndex === -1) {
      endIndex = data.length;
    }
    endIndex = Math.min(endIndex, data.length - 1);

    const items = [];
    console.log(startIndex, endIndex, data);

    if (data && data.length > 0) {
      for (let i = startIndex; i <= endIndex; i++) {
        const top = i === 0 ? 0 : allHeights[i - 1];
        const height = i === 0 ? allHeights[0] : allHeights[i] - allHeights[i - 1];
        items.push(
          <div
            key={data[i]?.key || i}
            style={{
              position: 'absolute',
              left: 0,
              top,
              height,
              width: '100%',
            }}
          >
            {/* <Children data={data[i]} idx={i} /> */}
            {Children({ data: data[i], idx: i, allHeightsList })}
          </div>,
        );
      }
      setRenderItems(items);
    }
  }, [allHeights, scrollTop]);

  const handleScroll = (e) => {
    flushSync(() => {
      setScrollTop(e.target.scrollTop);
    });
  };
  return (
    <div
      className="my-virtual-list2"
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: allHeights[allHeights.length - 1],
        }}
      >
        {renderItems}
      </div>
      {/* {renderItems} */}
    </div>
  );
};
VirtualListAutoH.displayName = 'VirtualListAutoH';
export { VirtualListAutoH };
