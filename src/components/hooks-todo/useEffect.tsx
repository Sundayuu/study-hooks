import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  //useEffect 相当于三大生命周期: componentDidMount,componentDidUpdate,componentWillUnMount

  // useEffect 处理副作用,会在render之后调用,第二个参数传递一个数组,react会比较数组中的元素是否相等(元素===元素),相当于componentDidUpdate
  // 相等则跳过useEffect,传递空数组 相当于componentDidMount
  useEffect(() => {
    document.title = count.toString();
  }, [count]);
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };
  useEffect(() => {
    // render后绑定事件 useEffect第二个参数[],相当于componentDidMount和componentWillUnmount
    window.addEventListener('resize', onResize, false);
    // 在组件卸载后要解除绑定,useEffect return一个函数,每次useEffect都会调用
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
      <p>{'size:' + size.width + '*' + size.height}</p>
    </div>
  );
}
