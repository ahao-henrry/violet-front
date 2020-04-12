import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class PicShow extends Component {
  static propTypes = PropTypes.string.isRequired;

    constructor(props) {
      super(props);
      this.state = {
        pageState: 'init',
        imgList: []
      };
    }

    componentWillReceiveProps(newProps) {
      const {queryKey} = newProps;
      this.handleSearch(queryKey);
    }

    render() {
      
      return (
        <div className='pic-div'>
          {
              this.state.imgList.map((imgInfo) => {
                const fileUrl = '/images/' + imgInfo.fileName;
              return <img alt={imgInfo.fileName} key={imgInfo.fileId} src={fileUrl}/>
              })
          }
        </div>
      );
    }

    handleSearch(queryKey) {
      this.setState({imgList: []});
      const url = `/violet/search?key=${queryKey}`;
      axios.get(url)
            .then(res => {
              const result = res.data;
              this.setState((prevState) => {
                return {
                  imgList: result,
                }
              });
            })
            .catch((err) => {
              alert('something is wrong.')
            });
    }

}

export default PicShow;