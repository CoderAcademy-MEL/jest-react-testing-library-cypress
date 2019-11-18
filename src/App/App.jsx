import React from 'react';
import '../App.css';

class App extends React.Component {
  state = {
    number: 1
  }
  changeNumber = () => {
    this.setState((prevState) => {
      return prevState.number === 1 ? {number: 10} : {number: 1} 
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeNumber} data-testid="button">Change number</button>
        <h1>{this.state.number}</h1>
      </div>  
    );
  }
}

export default App;
