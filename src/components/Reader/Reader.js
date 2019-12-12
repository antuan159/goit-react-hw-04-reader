import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import style from './Reader.module.css';
import Counter from '../Counter';
import Controls from '../Controls';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    extraProp: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.objectOf(Array).isRequired,
    history: PropTypes.objectOf(Array).isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const { history } = this.props;
    if (location.search) {
      return;
    }
    location.search = '?item=1';
    history.replace(location.search);
  }

  handleChangePage = obj => {
    const { location } = this.props;
    const { history } = this.props;
    const str = location.search.slice(6);
    const str1 = `/reader?item=${Number(str) + obj}`;
    history.push(str1);
  };

  render() {
    const { extraProp: publications } = this.props;
    const { location } = this.props;
    const query = queryString.parse(location.search);
    const index = Number(query.item) - 1;
    return (
      <div className={style.reader}>
        <Controls
          onChangePage={this.handleChangePage}
          indexStart={index}
          indexEnd={publications.length - 1}
        />
        {location.search && (
          <Counter index={index} maxLength={publications.length} />
        )}
        {location.search && <Publication article={publications[index]} />}
      </div>
    );
  }
}
