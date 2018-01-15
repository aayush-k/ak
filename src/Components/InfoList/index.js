import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoList extends Component {
  render() {
    const {
      title,
      listItemsA,
      listItemsB,
      sidebar,
    } = this.props;

    const styles = sidebar ? { width: '100%', paddingTop: '0.65rem' } : {};

    return (
      <div className='infoList_container' style={styles}>
        <h4>{title}</h4>
        <ul>
          {listItemsB.map((item, index) =>
            <li key={index}>
              <p style={{display: 'inline-block', fontWeight: '800'}}>{listItemsA && listItemsA[index]}</p>
              {item}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

InfoList.propTypes = {
  listItemsA: PropTypes.arrayOf(PropTypes.string),
  listItemsB: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export { InfoList };
