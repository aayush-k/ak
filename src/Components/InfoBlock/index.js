import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 50 50" class="icon icons8-External-Link" >
              <g id="surface1">
                <path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z "/>
              </g>
            </svg>
*/

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
      listItemsB,
      link
    } = this.props;
    return (
      <div className='infoBlock_container'>
        <div className='infoBlock_header'>
          <div className='infoBlock_header_primary'>
            <img src={icon} alt={icon}/>
          </div>
          <div className='infoBlock_header_secondary'>

            {link ? (<a href={link}>
              <h4>{title}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" className='infoBlock_link_icon'>
                  <g id="surface1">
                    <path stroke='none' fillRule='nonzero' fillOpacity='0.6' d="M 23.679688 0 C 20.050781 0.00390625 20.320313 0.972656 22.234375 2.882813 L 28.425781 9.074219 L 17.789063 19.710938 C 15.585938 21.910156 15.589844 25.445313 17.789063 27.644531 L 22.476563 32.273438 C 24.675781 34.464844 28.207031 34.46875 30.410156 32.273438 L 41.046875 21.695313 L 47.117188 27.765625 C 49.234375 29.878906 50 29.949219 50 26.320313 L 50 6.550781 C 50 -0.0585938 50.070313 0 43.449219 0 Z M 9.375 9.617188 C 4.195313 9.617188 0 13.8125 0 18.992188 L 0 40.625 C 0 45.804688 4.195313 50 9.375 50 L 31.007813 50 C 36.1875 50 40.382813 45.804688 40.382813 40.625 L 40.382813 28.367188 L 34.617188 34.132813 L 34.617188 40.625 C 34.617188 42.613281 33 44.230469 31.007813 44.230469 L 9.375 44.230469 C 7.386719 44.230469 5.769531 42.613281 5.769531 40.625 L 5.769531 18.992188 C 5.769531 17 7.386719 15.382813 9.375 15.382813 L 15.984375 15.382813 L 21.753906 9.617188 Z "/>
                  </g>
                </svg>
              </h4>
            </a>) : (<h4>{title}</h4>)}
            <h5>{subheader}</h5>
            <p style={{fontWeight: '700', fontSize: '0.7rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '1.5px'}}>{setting}</p>
          </div>
        </div>
        <p className='infoBlock_description'>{description}</p>
        <ul className='infoBlock_listItems'>
          {listItemsB && listItemsB.map((item, index) =>
            <li key={index}>
              <p style={{ display: 'inline-block', fontWeight: '800', fontSize: '0.85rem', color: '#c18815'}}>{listItemsA && listItemsA[index]}</p>
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
  link: PropTypes.string,
};

export { InfoBlock };