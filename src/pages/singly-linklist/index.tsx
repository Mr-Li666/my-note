import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { SinglyLinkList } from '@/data-structure';

import siglyLink1 from '../../assets/singly-link1.png';
import siglyLink2 from '../../assets/singly-link2.png';
import siglyLink3 from '../../assets/singly-link3.png';

const SinglyLinkFunc = new SinglyLinkList();

export function SinglyLink() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(SinglyLinkFunc);
  }, []);

  return (
    <div className="singlyLink-component">
      <Image.PreviewGroup items={[siglyLink1, siglyLink2, siglyLink3]}>
        <Image width={800} src={siglyLink1} />
      </Image.PreviewGroup>

      <div className="singlyLink-btn-group my-[20px]">
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            SinglyLinkFunc.append((Math.random() * 100).toFixed());
            console.log(SinglyLinkFunc);
          }}
        >
          append
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            SinglyLinkFunc.insert(3, (Math.random() * 100).toFixed());
            console.log(SinglyLinkFunc);
          }}
        >
          insert
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            const po = SinglyLinkFunc.get(3);
            console.log(po, SinglyLinkFunc);
          }}
        >
          get
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const index = SinglyLinkFunc.indexOf((Math.random() * 100).toFixed());
            console.log(index, SinglyLinkFunc);
          }}
        >
          indexOf
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            SinglyLinkFunc.update(3, 'update');
            console.log(SinglyLinkFunc);
          }}
        >
          update
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            SinglyLinkFunc.removeAt(3);
            console.log(SinglyLinkFunc);
          }}
        >
          removeAt
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const isEmpty = SinglyLinkFunc.isEmpty();
            console.log(isEmpty, SinglyLinkFunc);
          }}
        >
          isEmpty
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const size = SinglyLinkFunc.size();
            console.log(size, SinglyLinkFunc);
          }}
        >
          size
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const toString = SinglyLinkFunc.toString();
            console.log(toString, SinglyLinkFunc);
            setValue(toString);
          }}
        >
          toString
        </Button>
      </div>
      <div>{value}</div>

      <div className="singlyLink-reference">
        <div>
          <a href="https://juejin.cn/post/6921515173614354445?searchId=20231004104245EB672F06F2C7DAE8B83A">
            「算法与数据结构」JavaScript中的链表
          </a>
        </div>
        <div>
          <a href="https://juejin.cn/post/7054526789745377287?searchId=20231004104245EB672F06F2C7DAE8B83A">
            单向链表
          </a>
        </div>
        <div>
          <a href="https://juejin.cn/post/7054717531948335141?from=search-suggest">
            单向链表（上篇）
          </a>
        </div>
      </div>
    </div>
  );
}
