import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../css/Search.css';


class Search extends Component {
  static propTypes = {
    setQueryKey: PropTypes.func.isRequired
  }

    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleTyping = this.handleTyping.bind(this);
      this.state = {
        qureyKey: ''
      };
    }

    render() {
      return (
          <div className='search-div'>
            <input className='search-input' value={this.state.qureyKey} onChange={this.handleTyping} placeholder='type anything you want' />
            <span className='search-btn' onClick={this.handleSearch}></span>
          </div>
      );
    }

    handleSearch() {
      const qureyKey = this.state.qureyKey;
      this.props.setQueryKey(qureyKey);
      // const url = 'http://192.168.0.99:18084/violet/search?key=' + this.state.key;
      // axios.get(url)
      //       .then(res => {
      //         const result = res.data;
      //         this.setState((prevState) => {
      //           return {
      //             key: '',
      //             luckyNum: [result],
      //             show: 'show'
      //           }
      //         });
      //       })
      //       .catch((err) => {
      //         alert('something is wrong.')
      //       });
    }

    handleTyping(e) {
      this.setState({
        qureyKey: e.target.value
      })
    }

}

export default Search;