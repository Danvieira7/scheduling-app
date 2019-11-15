import React, { Component } from 'react';
import DocDescription from "../components/DocDescription/DocDescription"
import Calendar from "../components/Calendar/Calendar"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  render() {
    return(
      <div className="App">
        <div className="painel">
          < DocDescription />
          < Calendar />
        </div>
      </div>
    );
  }
}

export default App;