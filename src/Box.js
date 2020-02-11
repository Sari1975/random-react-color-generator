import React from 'react';
import './Box.css';

export default function Box(props) {
  return (
    <div className="Box" style={{ backgroundColor: props.color }}>
      Hex Code - {props.color}
    </div>
  );
}
