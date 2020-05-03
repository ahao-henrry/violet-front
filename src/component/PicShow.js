import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class PicShow extends Component {
  static propTypes = PropTypes.string.isRequired;

    constructor(props) {
      super(props);
      this.state = {
        pageState: 'init',
        imgList: [],
        info: null
      };
    }

    componentWillReceiveProps(newProps) {
      const {queryKey} = newProps;
      this.handleSearch(queryKey);
    }

    render() {
      
      /*return (
        <div className='pic-div'>
          {
              this.state.imgList.map((imgInfo) => {
                const fileUrl = '/images/' + imgInfo.fileName;
              return <img alt={imgInfo.fileName} key={imgInfo.fileId} src={fileUrl}/>
              })
          }
        </div>
      );*/
      const idata = this.state.info;
      if(null == idata){
        return (<Fragment></Fragment>);
      }
      return (
        <div className='pic-div'>
          <img alt={idata.fileName} key={idata.fileId} src={idata.fileUrl}/>
          <p>{idata.remark}</p>
        </div>
      );
    }

    handleSearch(queryKey) {
      this.setState({imgList: [], info: null});
      // const url = `/violet/search?key=${queryKey}`;
      const url = 'http://192.168.0.99:18084/violet/search/one?key=' + this.state.queryKey;
      axios.get(url)
            .then(res => {
              const result = res.data;
              this.setState((prevState) => {
                return {
                  info: result
                }
              });
            })
            .catch((err) => {
              alert('something is wrong.')
            });
    }

}

export default PicShow;