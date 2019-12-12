import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';

const Publication = ({ article }) => (
  <article className={style.publication}>
    <h2 className={style.title}>{article.title}</h2>
    <p className={style.text}>{article.text}</p>
  </article>
);

Publication.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
