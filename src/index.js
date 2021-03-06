import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Record from './Record';
import Search from './component/Search';
import PicShow from './component/PicShow';

class All extends Component {

  constructor(props) {
    super(props);
    this.setQueryKey = this.setQueryKey.bind(this);
    this.state = {
      queryKey: ''
    }
  }

  setQueryKey = (queryKey) => {
    this.setState((prevState) => {
      return {
        queryKey
      }
    })
  }

  render() {
    return <Fragment>
        <Search setQueryKey={this.setQueryKey} />
        <PicShow queryKey={this.state.queryKey} />
        <Record />
      </Fragment>
  }
}

ReactDOM.render(<All />, document.getElementById('root'));

