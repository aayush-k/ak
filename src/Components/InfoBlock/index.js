import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoBlock extends Component {
  render() {
    const {
      icon,
      title,
      subheader,
      full,
      setting,
      description,
      listItemsA,
      listItemsB
    } = this.props;
    return (
      <div className='infoBlock_container'>
        <div className='infoBlock_header'>
          <div className='infoBlock_header_primary'>
            <img src={icon} alt={icon}/>
          </div>
          <div className='infoBlock_header_secondary'>
            <h4>{title}</h4>
            <h5>{subheader}</h5>
            <p style={{fontStyle: 'italic'}}>{setting}</p>
          </div>
        </div>
        <p className='infoBlock_description'>{description}</p>
        <ul className='infoBlock_listItems'>
          {listItemsB && listItemsB.map((item, index) =>
            <li key={index}>
              <p style={{ display: 'inline-block', fontWeight: '800', fontSize: '0.8rem', color: '#cf8a05' }}>{listItemsA && listItemsA[index]}</p>
              {item}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

InfoBlock.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  setting: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  listItemsA: PropTypes.arrayOf(PropTypes.string),
  listItemsB: PropTypes.arrayOf(PropTypes.string),
};

export { InfoBlock };