import React        from 'react';
import './App.css';
import { postTask } from './api';

class App extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      data: null,
    };
  }

  createTask = async () => {
    const { data } = await postTask();
    this.setState( {
                     data: data,
                   } );
  };

  render () {
    return (
      <button onClick={this.createTask}>CREATE TASK! WHAT ARE YOU WAITING FOR?! PUSH!!!!11</button>
    );
  }
}

export default App;
