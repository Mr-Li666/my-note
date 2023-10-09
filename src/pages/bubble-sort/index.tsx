import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { bubbleSort } from '@/algorithms';

import bubble_sort_gif from '../../assets/bubble-sort.gif';

export function BubbleSort() {
  const [value, setValue] = useState('');

  return (
    <div className="stack-component">
      <Image.PreviewGroup items={[bubble_sort_gif]}>
        <Image width={800} src={bubble_sort_gif} />
      </Image.PreviewGroup>

      <div className="stack-btns">
        <Button
          type="primary"
          className="mx-[8px]"
          onClick={() => {
            const val = bubbleSort([29, 10, 14, 37, 15, 1, 30]).join('->');
            setValue(val);
          }}
        >
          冒泡排序
        </Button>
      </div>
      <div>{value}</div>
      <div className="singlyLink-reference my-[20px]">
        <div>
          <a href="https://juejin.cn/post/6844903444365443080">冒泡排序</a>
        </div>
      </div>
    </div>
  );
}
