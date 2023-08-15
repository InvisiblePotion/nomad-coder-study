import React from 'react';
import ReactDOM from 'react-dom/client';
import UseEffectExample from "./useEffectExample";
import ButtonExample from './cssModuleExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <UseEffectExample />
    <ButtonExample text='Button' />
  </div>
);
