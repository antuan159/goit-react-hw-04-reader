import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import queryString from 'query-string';
import style from './Reader.module.css';
import Counter from '../Counter';
import Controls from '../Controls';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.objectOf(Array).isRequired,
    history: PropTypes.objectOf(Array).isRequired,
  };

  componentDidMount() {
    const { history } = this.props;
    if (!this.isIncludedRange()) {
      history.replace('/reader?item=1');
    }
    history.replace(history.location.search);
  }

  isIncludedRange = () => {
    const { items: publications } = this.props;
    const item = this.queryIndex();
    if (item <= 0 || item > publications.length) {
      return false;
    }
    return true;
  };

  queryIndex = () => {
    const { history } = this.props;
    return Number(history.location.search.slice(6));
  };

  handleChangePage = obj => {
    const { history } = this.props;
    history.push(`/reader?item=${this.queryIndex() + obj}`);
  };

  render() {
    const isIndclud = this.isIncludedRange();
    const index = this.queryIndex() - 1;
    const { items: publications } = this.props;
    return (
      <div className={style.reader}>
        <Controls
          onChangePage={this.handleChangePage}
          indexStart={index}
          indexEnd={publications.length - 1}
        />
        {isIndclud && <Counter index={index} maxLength={publications.length} />}
        {isIndclud && <Publication article={publications[index]} />}
      </div>
    );
  }
}
