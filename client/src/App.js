import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('/api/product/brands').then(response=>{
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        My project
      </div>
    );
  }
}

export default App;
