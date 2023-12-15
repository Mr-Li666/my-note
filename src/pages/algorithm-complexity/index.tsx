import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import complex_pic from '../../assets/complex1.png';
import complex_pic2 from '../../assets/complex2.png';

export function AlgorithmsComplexity() {
  const [value, setValue] = useState('');

  return (
    <div className="stack-component">
      <Image.PreviewGroup items={[complex_pic, complex_pic2]}>
        <Image width={800} src={complex_pic} />
      </Image.PreviewGroup>

      <div className="singlyLink-reference my-[20px]"></div>
    </div>
  );
}
