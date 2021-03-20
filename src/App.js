import './App.css';
import React from "react";
import Books from './components/Books';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }


  render() {
    return (
      
      <Books/>
    )
  }
}

export default App;
