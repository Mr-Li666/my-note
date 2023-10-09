import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { quickSort } from '@/algorithms';

import quick_sort_gif from '../../assets/quick-sort.gif';

export function QuickSort() {
  const [value, setValue] = useState('');

  return (
    <div className="stack-component">
      <Image.PreviewGroup items={[quick_sort_gif]}>
        <Image width={800} src={quick_sort_gif} />
      </Image.PreviewGroup>

      <div className="stack-btns">
        <Button
          type="primary"
          className="mx-[8px]"
          onClick={() => {
            const val = quickSort([29, 10, 14, 37, 15, 1, 30]).join('->');
            setValue(val);
          }}
        >
          快速排序
        </Button>
      </div>
      <div>{value}</div>
      <div className="singlyLink-reference my-[20px]">
        <div>
          <a href="https://juejin.cn/post/6844903444365443080">快速排序</a>
        </div>
      </div>
    </div>
  );
}
