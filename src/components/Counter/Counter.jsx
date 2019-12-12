import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';

const Counter = ({ index, maxLength }) => (
  <p className={style.counter}>
    {index + 1}/{maxLength}
  </p>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default Counter;
