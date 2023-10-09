import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { Quene } from '@/data-structure';

import quene1 from '../../assets/quene1.png';
import quene2 from '../../assets/quene2.png';

const quene = new Quene();
export function QueneComponent() {
  const [value, setValue] = useState('');
  const funcList = [
    {
      type: 'enquene',
      method: () => {
        quene.enquene((Math.random() * 100).toFixed());
        console.log(quene);
      },
    },
    {
      type: 'dequene',
      method: () => {
        const dequene = quene.dequene();
        console.log(dequene, quene);
      },
    },
    {
      type: 'front',
      method: () => {
        const front = quene.front();
        console.log(front, quene);
      },
    },

    {
      type: 'isEmpty',
      method: () => {
        const isEmpty = quene.isEmpty();
        console.log(isEmpty, quene);
      },
    },
    {
      type: 'size',
      method: () => {
        const size = quene.size();
        console.log(size, quene);
      },
    },
    {
      type: 'toString',
      method: () => {
        const str = quene.toString();
        setValue(str);
      },
    },
    {
      type: 'clear',
      method: () => {
        quene.clear();
        console.log(quene);
      },
    },
  ];
  useEffect(() => {
    // 击鼓传花问题
    const arr = ['aa', 'bb', 'c', 'd', 'e', 'f'];
    function pass(arr, num) {
      while (arr.length > 1) {
        let index;
        if (num > arr.length) {
          index = num % arr.length;
        } else {
          index = num;
        }
        // 更改开始计算的下标位置
        const arr1 = arr.slice(0, index - 1);
        const arr2 = arr.slice(index);
        arr = [...arr2, ...arr1];
        console.log(arr);
      }
      console.log(arr);
      return arr;
    }
    // pass(['aa', 'bb', 'c', 'd', 'e', 'f'], 3);
    // pass(arr, 7);

    //队列解决方案
    function passf(arr, num) {
      for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
          console.log(arr);
          return arr;
        }
        let index;
        if (num > arr.length) {
          index = num % arr.length;
        } else {
          index = num;
        }
        if (i !== index - 1) {
          const item = arr.shift();
          arr.push(item);
        } else {
          arr.shift();
          i = -1;
        }
      }
    }
    // passf(['aa', 'bb', 'c', 'd', 'e', 'f'], 7);

    function passquene(arr, num) {
      const quene = new Quene();
      //1. 把arr的元素放入队列中
      for (const item of arr) {
        quene.enquene(item);
      }
      //2.
      while (quene.size() > 1) {
        for (let i = 0; i < num; i++) {
          const item = quene.dequene();
          console.log(item);
          quene.enquene(item);
        }
        quene.dequene();
        console.log(quene);
        // console.log(quene.dequene(), '淘汰了');
      }
      // const res = quene.dequene();
      // console.log(res);
      // return res;
    }

    // passquene(['aa', 'bb', 'c', 'd', 'e', 'f'], 7);
  }, []);
  return (
    <div className="quene-component">
      <Image.PreviewGroup items={[quene1, quene2]}>
        <Image width={800} src={quene1} />
      </Image.PreviewGroup>

      <div className="quene-btns my-[20px]">
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
          <a href="https://juejin.cn/post/7229238405405933626?searchId=2023100315305373AE25892CC31D4580D4">
            JS数据结构之---队列
          </a>
        </div>
      </div>
    </div>
  );
}
