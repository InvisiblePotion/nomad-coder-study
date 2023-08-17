import React from 'react';
import ReactDOM from 'react-dom/client';
import CoinTracker from "./CoinTracker"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <CoinTracker />
  </div>
);
/* 6챕터에서 작성된 연습용 코드를 사용하려면 이 친구들 사용
  import UseEffectExample from "./useEffectExample";
  import ButtonExample from './cssModuleExample';
  <UseEffectExample />
  <ButtonExample text='Button' />
*/
