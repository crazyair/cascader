import React, { useState } from 'react';
import '../assets/index.less';
import type { SingleCascaderProps } from '../src';
import Cascader from '../src';
import type { Option2 } from './utils';

const addressOptions = [
  {
    label: '福建',
    value: 'fj',
    children: [
      {
        label: '福州',
        value: 'fuzhou',
        children: [
          {
            label: '马尾',
            value: 'mawei',
          },
        ],
      },
      {
        label: '泉州',
        value: 'quanzhou',
      },
    ],
  },
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '余杭',
            value: 'yuhang',
          },
        ],
      },
    ],
  },
  {
    label: '北京',
    value: 'bj',
    children: [
      {
        label: '朝阳区',
        value: 'chaoyang',
      },
      {
        label: '海淀区',
        value: 'haidian',
        disabled: true,
      },
    ],
  },
];

const Demo = () => {
  const [inputValue, setInputValue] = useState('');

  const onChange: SingleCascaderProps<string, Option2>['onChange'] = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    setInputValue(selectedOptions.map(o => o.label).join(', '));
  };

  return (
    <Cascader
      options={addressOptions}
      onChange={onChange}
      dropdownRender={menus => (
        <div>
          {menus}
          <hr />
          Hey, DropdownRender, Long DropdownRender, Long DropdownRender
        </div>
      )}
    >
      <input placeholder="please select address" value={inputValue} />
    </Cascader>
  );
};

export default Demo;
