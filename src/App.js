import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
  }

  componentDidMount() {
    this.getTime();
  }

  getTime() {
    fetch("http://www.ahaohenry.com/violet/time", {
      method: "get",
      mode: "cors"
    }).then(res =>{
      return res.text();
    }).then(
        result => {
          this.setState(() => {return {time: result}})
        },
        error => {
          console.log(error)
        }
      )
  }

  render() {
    const { time } = this.state;
    return(
      <div className="App">
        <header className="App-header">
          <p> 
            {time}
          </p>
        </header>
      </div>
    )}
}

export default App;
