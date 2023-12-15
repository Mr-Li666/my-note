import { Card } from 'antd';
import { log } from 'console';
import React, { useEffect, useState } from 'react';

import List from './components/List';

export default function VirtualList() {
  const [data, setData] = useState([]);
  const list = new Array(1000).fill(0).map((item, i) => i);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 500; i++) {
      arr.push({
        key: i,
        name: i,
        age: i * Math.random(),
        address: 'address address address',
      });
    }
    // const sliceArr = arr.slice(0, 12);
    setData(arr);
  }, []);

  return (
    <div className="virtual-list">
      <List data={data} containerHeight={300} itemHeight={200}>
        {(item) => {
          return (
            <div>
              <Card size="small" title="Small size card" style={{ width: 300 }}>
                <p>name:{item.name}</p>
                <p>age:{item.age}</p>
                <p>address:{item.adress}</p>
              </Card>
            </div>
          );
        }}
      </List>
      {/* <List data={list} containerHeight={300} itemHeight={50}>
        {(item) => {
          return <div>{item}</div>;
        }}
      </List> */}
    </div>
  );
}
