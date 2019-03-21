import React, { Component } from 'react';
import Square from './Square'
import SquareTwo from './SquareTwo'

class App extends Component {
  render() {
    return (
      <div className="body">
        <SquareTwo/>
      </div>
    );
  }
}

export default App;
