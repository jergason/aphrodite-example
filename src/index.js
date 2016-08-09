import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';

ReactDOM.render(
  <div className="app"><div><Button onClick={(e) => alert('THIS IS INCREDIBLE')}>Click Me!</Button></div></div>,
  document.getElementById('root')
);
