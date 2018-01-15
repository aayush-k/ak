import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const {
      children,
      title
    } = this.props;

    return (
      <div className='section_container'>
        <div className='section_primary'>
          <h3>{title}</h3>
        </div>
        <div className='section_secondary'>
          {children}
        </div>

      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,

};

export { Section };