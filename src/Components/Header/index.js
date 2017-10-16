import React, { Component } from 'react';
import ghIcon from '../../img/github-logo.png';
import emIcon from '../../img/mail.png';
import liIcon from '../../img/li3.png';
import phIcon from '../../img/phone.png';
import locIcon from '../../img/Home.png';
import akLogo from '../../img/aklogo.png'

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
            <img src={akLogo} style={{width: '2rem', marginRight: '0.5rem', verticalAlign: 'middle', opacity: 0.6}}/>
            <span style={{color: '#bbb', fontWeight: '300'}}>aayush-k.tech</span>
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