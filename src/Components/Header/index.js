import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import ghIcon from '../../img/github-logo.png';
import emIcon from '../../img/mail.png';
import liIcon from '../../img/li3.png';
import phIcon from '../../img/phone.png';
import locIcon from '../../img/Home.png';

const me = [
  'github.com/aayush-k',
  'aayush.kumar@gatech.edu',
  'linkedin.com/in/aayushkumar1',
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

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <div className="header_primary">
          {/*<img src={logo} className="header_logo" alt="logo" />*/}
          <h1>Aayush<h1 style={{ display: 'inline-block', color: '#222'}}>Kumar</h1></h1>

          <a href='https://aayush-k.github.io/me/'><h2>aayush-k.github.io/me/</h2></a>
        </div>
        <div className="header_secondary">
          <ul>
            <br />
            {me.map((link, index) => (
              <li>
                <img src={icons[index]}/>{link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export {Header};