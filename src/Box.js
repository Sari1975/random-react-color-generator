import React from 'react';
import './Box.css';
import PropTypes from 'prop-types';

export default function Box(props) {
  return (
    <div className="Box" style={{ backgroundColor: props.color }}>
      Hex Code - {props.color}
    </div>
  );
}
Box.propTypes = { color: PropTypes.string };
