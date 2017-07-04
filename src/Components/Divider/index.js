import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Divider extends Component {
  render() {
    const {
      width,
      height,
      color
    } = this.props;

    const styling = {
      backgroundColor: color,
      width: width,
      height: height,
    };

    return (
      <div className='divider' style={styling}/>
    );
  }
}

Divider.propTypes = {

};

Divider.defaultProps = {
  color: '#dedede',
  width: '100%',
  height: '0.07rem',
}

export { Divider };