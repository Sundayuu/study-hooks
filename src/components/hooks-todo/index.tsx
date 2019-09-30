import React, { useState } from 'react';

export default function Example(props: any) {
  const [count, setCount] = useState(() => {
    // 默认值,默认值写在useState的cb参数中,值渲染一次
    return props.defaultCount || 0;
  });
  const [name, setName] = useState('mike');
  // 使用defaultProps,useState传入一个cb

  // useState只能在顶层调用,不能在条件或者循环语句调用,useState会按书写顺序调用
  //eslint-plugin-react-hooks 检查hooks语法插件
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>{name}</button>
    </div>
  );
}
