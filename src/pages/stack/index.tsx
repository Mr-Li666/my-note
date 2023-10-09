import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { Stack } from '@/data-structure';

import stack1 from '../../assets/stack1.webp';
import stack2 from '../../assets/stack2.png';

const stack = new Stack([1, 2, 3]);

export function StackComponent() {
  const [value, setValue] = useState('');
  const funcList = [
    {
      type: 'push',
      method: () => {
        stack.push((Math.random() * 100).toFixed());
        console.log(stack);
      },
    },
    {
      type: 'pop',
      method: () => {
        const pop = stack.pop();
        console.log(pop, stack);
      },
    },
    {
      type: 'peek',
      method: () => {
        const peek = stack.peek();
        console.log(peek, stack);
      },
    },

    {
      type: 'isEmpty',
      method: () => {
        const isEmpty = stack.isEmpty();
        console.log(isEmpty, stack);
      },
    },
    {
      type: 'size',
      method: () => {
        const size = stack.size();
        console.log(size, stack);
      },
    },
    {
      type: 'toString',
      method: () => {
        const str = stack.toString();
        setValue(str);
      },
    },
    {
      type: 'clear',
      method: () => {
        stack.clear();
        console.log(stack);
      },
    },
  ];
  useEffect(() => {
    console.log(stack);
  }, []);
  return (
    <div className="stack-component">
      <Image.PreviewGroup items={[stack1, stack2]}>
        <Image width={800} src={stack1} />
      </Image.PreviewGroup>

      <div className="stack-btns">
        {funcList.map((item) => (
          <Button
            key={item.type}
            type="primary"
            className="mx-[8px]"
            onClick={item.method}
          >
            {item.type}
          </Button>
        ))}
      </div>
      <div>{value}</div>
      <div className="singlyLink-reference my-[20px]">
        <div>
          <a href="https://juejin.cn/post/7195108093104455717?searchId=202310031435289E55FC2FD21BBB4D4966">
            栈结构 Stack
          </a>
        </div>
      </div>
    </div>
  );
}
