import React, { useState, useRef, useEffect } from 'react';
// 自定义hooks
function useCount(defaultCount: number) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef() as any;
  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);
  // count到10清除定时器
  useEffect(() => {
    if (count >= 10) clearInterval(it.current);
  });
  return [count, setCount];
}

// 自定义hook,其实就是在书写函数,控制好返回值
export default function App() {
  const [count, setCount] = useCount(0);

  return (
    <div>
      <button>count{count}</button>
    </div>
  );
}
