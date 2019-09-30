import React, {
  PureComponent,
  useState,
  useMemo,
  useCallback,
  memo,
  useRef,
  useEffect
} from 'react';

export default function Usememo() {
  const [count, setCount] = useState(0);
  // useMemo 类似于shouldComponentUpdate,做性能优化,useMemo返回一个函数等同于useCallback
  // 当满足 依赖数组元素条件时才执行
  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);
  //useCallback 返回一个memo回调函数
  useEffect(() => {
    input_ref.current.focus();
  }, []);
  // 直接传入会每次都刷新子组件,使用useCallback做性能优化
  // const handleClick = () => {
  //   console.log('Click');
  // };
  const input_ref: any = useRef();
  const countRef: any = useRef();
  const handleClick = useCallback(() => {
    console.log('Click');
    console.log(countRef.current);
  }, [countRef]);

  return (
    <div>
      <p>{count}</p>
      <p>{'doulbe:' + double}</p>
      <button onClick={() => setCount(preState => preState + 1)}>点我</button>
      <Counter ref={countRef} counter={double} Click={handleClick} />
      <input type="text" ref={input_ref} />
    </div>
  );
}
// 这样写每次都会重新渲染子组件Counter,使用memo来优化函数组件memo类似于shouldComponentUpdate
// function Counter(props: any) {
//   console.log('Counter render');

//   return <div>{props.counter}</div>;
// }
// ref获取dom,必须是类组件
class Counter extends PureComponent<any, any> {
  render() {
    const { props } = this;
    return (
      <div>
        <h1 onClick={props.Click}>{props.counter}</h1>
      </div>
    );
  }
}

// const Counter = memo(function Counter(props: any) {
//   console.log('Counter render');

//   return <h1 onClick={props.Click}>{props.counter}</h1>;
// });
