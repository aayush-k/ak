import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import ghIcon from '../../img/github-logo.png';
import emIcon from '../../img/mail.png';
import liIcon from '../../img/li3.png';
import phIcon from '../../img/phone.png';
import locIcon from '../../img/Home.png';
import akLogo from '../../img/aklogo3.png'

const me = [
  'github.com/aayush-k',
  'aayush.kumar@gatech.edu',
  'linkedin.com/in/aayush-k',
  '(408) 859-6810',
  'San Jose, CA - U.S. Citizen'
];

const icons = [
  ghIcon,
  emIcon,
  liIcon,
  phIcon,
  locIcon
];

const urls = [
  'https://github.com/aayush-k',
  'mailto:aayush.kumar@gatech.edu',
  'https://linkedin.com/in/aayush-k',
  undefined,
  undefined
]

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className="header_primary">
          <h1>Aayush<h1 style={{ display: 'inline-block', color: '#222', fontWeight: '300'}}>Kumar</h1></h1>

          <a href='http://aayush-k.tech/'>
          <h2>
            <img src={akLogo} style={{width: '2rem', marginRight: '0.5rem', verticalAlign: 'middle', opacity: 0.7}}/>
            aayush-k.tech
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" className='header_link_icon'>
              <g id="surface1">
                <path stroke='none' fillRule='nonzero' fillOpacity='0.7' d="M 23.679688 0 C 20.050781 0.00390625 20.320313 0.972656 22.234375 2.882813 L 28.425781 9.074219 L 17.789063 19.710938 C 15.585938 21.910156 15.589844 25.445313 17.789063 27.644531 L 22.476563 32.273438 C 24.675781 34.464844 28.207031 34.46875 30.410156 32.273438 L 41.046875 21.695313 L 47.117188 27.765625 C 49.234375 29.878906 50 29.949219 50 26.320313 L 50 6.550781 C 50 -0.0585938 50.070313 0 43.449219 0 Z M 9.375 9.617188 C 4.195313 9.617188 0 13.8125 0 18.992188 L 0 40.625 C 0 45.804688 4.195313 50 9.375 50 L 31.007813 50 C 36.1875 50 40.382813 45.804688 40.382813 40.625 L 40.382813 28.367188 L 34.617188 34.132813 L 34.617188 40.625 C 34.617188 42.613281 33 44.230469 31.007813 44.230469 L 9.375 44.230469 C 7.386719 44.230469 5.769531 42.613281 5.769531 40.625 L 5.769531 18.992188 C 5.769531 17 7.386719 15.382813 9.375 15.382813 L 15.984375 15.382813 L 21.753906 9.617188 Z "/>
              </g>
            </svg>
          </h2>
          </a>
        </div>
        <div className="header_secondary">
          <ul>
            <div style={{height: '0.5rem'}}/>
            {me.map((link, index) => (
              <a href={urls[index]} className='header_contact_link'><li>
                <img src={icons[index]}/>{link}
              </li></a>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export {Header};