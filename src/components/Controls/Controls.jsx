import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ onChangePage, indexStart, indexEnd }) => (
  <section className={style.controls}>
    <button
      className={style.button}
      type="button"
      onClick={() => onChangePage(-1)}
      disabled={indexStart === 0}
    >
      Назад
    </button>
    <button
      className={style.button}
      type="button"
      onClick={() => onChangePage(1)}
      disabled={indexStart === indexEnd}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  indexStart: PropTypes.number.isRequired,
  indexEnd: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Controls;
