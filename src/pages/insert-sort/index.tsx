import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { insertSort } from '@/algorithms';

export function InsertSort() {
  const [value, setValue] = useState('');

  return (
    <div className="stack-component">
      <Image.PreviewGroup
        items={[
          'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/f0e1e3b7f95c3888ab2791b6abbfae41~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp',
        ]}
      >
        <Image
          width={800}
          src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2016/11/29/f0e1e3b7f95c3888ab2791b6abbfae41~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp"
        />
      </Image.PreviewGroup>

      <div className="stack-btns">
        <Button
          type="primary"
          className="mx-[8px]"
          onClick={() => {
            const val = insertSort([29, 10, 14, 37, 15, 1, 30]).join('->');
            setValue(val);
          }}
        >
          插入排序
        </Button>
      </div>
      <div>{value}</div>
      <div className="singlyLink-reference my-[20px]">
        <div>
          <a href="https://juejin.cn/post/6844903444365443080">插入排序</a>
        </div>
      </div>
    </div>
  );
}
