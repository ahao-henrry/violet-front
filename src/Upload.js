import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryKey: ''
    }
  }

  render() {
    return <Fragment>
        <input type='file' />
        <input placeholder='what you wanna say.' />
        <p>aaa</p>
      </Fragment>
  }
}

ReactDOM.render(<Upload />, document.getElementById('root'));
