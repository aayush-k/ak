import React, { Component } from 'react';
import logo from '../../img/logo.svg';

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
            <li>
              github.com/aayush-k
            </li>
            <li>
              aayush.kumar@gatech.edu
            </li>
            <li>
              linkedin.com/in/aayushkumar1
            </li>
            <li>
              (408)859-6810
            </li>
            <li>
              San Jose, CA - U.S. Citizen
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export {Header};