import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button className="Button" onClick={props.onClickRandomColor}>
      Generate Color{' '}
    </button>
  );
}
Button.propTypes = { onClickRandomColor: PropTypes.func };
