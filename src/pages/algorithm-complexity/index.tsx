import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import complex_pic from '../../assets/complex1.png';
import complex_pic2 from '../../assets/complex2.png';
import List from './components/List';

const ItemChildren = ({ value }) => {
  return <div>{value}</div>;
};

export function AlgorithmsComplexity() {
  const [value, setValue] = useState('');

  const list = new Array(1000).fill(0).map((item, i) => i);

  console.log(list);

  return (
    <div className="stack-component">
      {/* <Image.PreviewGroup items={[complex_pic, complex_pic2]}>
        <Image width={800} src={complex_pic} />
      </Image.PreviewGroup>

      <div className="singlyLink-reference my-[20px]"></div> */}

      <div>
        <List data={list} containerHeight={300} itemHeight={50}>
          {(item) => {
            return <ItemChildren value={item} />;
          }}
          {/* <ItemChildren /> */}
        </List>
      </div>
    </div>
  );
}
