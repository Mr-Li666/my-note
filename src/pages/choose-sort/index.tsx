import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { chooseSort } from '@/algorithms';

import choose_sort_gif from '../../assets/choose-sort.gif';

export function ChooseSort() {
  const [value, setValue] = useState('');

  return (
    <div className="stack-component">
      <Image.PreviewGroup items={[choose_sort_gif]}>
        <Image width={800} src={choose_sort_gif} />
      </Image.PreviewGroup>

      <div className="stack-btns">
        <Button
          type="primary"
          className="mx-[8px]"
          onClick={() => {
            const val = chooseSort([29, 10, 14, 37, 14]).join('->');
            setValue(val);
          }}
        >
          选择排序
        </Button>
      </div>
      <div>{value}</div>
      <div className="singlyLink-reference my-[20px]">
        <div>
          <a href="https://juejin.cn/post/6844903444365443080">选择排序</a>
        </div>
      </div>
    </div>
  );
}
