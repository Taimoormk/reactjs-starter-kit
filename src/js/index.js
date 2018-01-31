import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

ReactDOM.render(
  <List />,
  document.querySelector('#app'),
  function(){console.log('I have rendered')}
);