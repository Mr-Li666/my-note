import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { BidirectionLinkList } from '@/data-structure';

import bidirection from '../../assets/bidirection.png';
import bidirection2 from '../../assets/bidirection2.png';
import bidirection3 from '../../assets/bidirection3.png';
import bidirection4 from '../../assets/bidirection4.png';

const bidirectionLink = new BidirectionLinkList();
export function BidirectionalLink() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(bidirectionLink);
  }, []);
  return (
    <div className="bidirectionalLink-component">
      <Image.PreviewGroup items={[bidirection2, bidirection3, bidirection4, bidirection]}>
        <Image width={800} src={bidirection2} />
      </Image.PreviewGroup>

      <div className="singlyLink-btn-group my-[20px]">
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            bidirectionLink.append((Math.random() * 100).toFixed());
            console.log(bidirectionLink);
          }}
        >
          append
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            bidirectionLink.insert(3, (Math.random() * 100).toFixed());
            console.log(bidirectionLink);
          }}
        >
          insert
        </Button>

        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            const po = bidirectionLink.get(3);
            console.log(po, bidirectionLink);
          }}
        >
          get
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const index = bidirectionLink.indexOf((Math.random() * 100).toFixed());
            console.log(index, bidirectionLink);
          }}
        >
          indexOf
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            bidirectionLink.update(3, 'update');
            console.log(bidirectionLink);
          }}
        >
          update
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            bidirectionLink.removeAt(3);
            console.log(bidirectionLink);
          }}
        >
          removeAt
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const isEmpty = bidirectionLink.isEmpty();
            console.log(isEmpty, bidirectionLink);
          }}
        >
          isEmpty
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const size = bidirectionLink.size();
            console.log(size, bidirectionLink);
          }}
        >
          size
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const toString = bidirectionLink.forwardString();
            console.log(toString, bidirectionLink);
            setValue(toString);
          }}
        >
          forwardString
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const toString = bidirectionLink.backWordString();
            console.log(toString, bidirectionLink);
            setValue(toString);
          }}
        >
          backWordString
        </Button>
      </div>
      <div>{value}</div>

      <div className="singlyLink-reference">
        <div>
          <a href="https://juejin.cn/post/7055856408545198111?from=search-suggest">
            双向链表
          </a>
        </div>
      </div>
    </div>
  );
}
