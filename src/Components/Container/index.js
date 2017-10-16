import React, { Component } from 'react';

class Container extends Component {

  render() {
    const {
      flexCol,
    } = this.props;

    const styles = { flexDirection: (flexCol ? 'column' : 'row') };

    return (
      <div className='container' style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export {Container};