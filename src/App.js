import React        from 'react';
import './App.css';
import { postTask } from './api';

class App extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      value: '',
      deadline: '',
      isDone: false,
    };
  }

  createTask = async (e) => {
    e.preventDefault();
    const { data } = await postTask( this.state);
    console.log( data );
  };

  handleChange = e => {
    this.setState( {
                     value: e.target.value,
                   } );
  };

  handleDeadlineChange = e => {
    this.setState( {
                     deadline: e.target.value,
                   } );
  };

  handleIsDoneChange = e => {
    this.setState( {
                     isDone: e.target.checked,
                   } );
  };

  render () {

    const { value, deadline, isDone } = this.state;

    return (
      <form onSubmit={this.createTask}>
        <label htmlFor="taskValueInput">
          <span>Task value: </span>
          <input id="taskValueInput" type="text" name="value" value={value} onChange={this.handleChange}/>
        </label>
        <br/>
        <label htmlFor="taskDateInput">
          <span>Task deadline: </span>
          <input id="taskDateInput" type="date" name="deadline" value={deadline} onChange={this.handleDeadlineChange}/>
        </label>
        <br/>
        <label htmlFor="taskIsDoneInput">
          <span>Is done: </span>
          <input id="taskIsDoneInput" type="checkbox" name="isDone" checked={isDone}
                 onChange={this.handleIsDoneChange}/>
        </label>
        <br/>
        <input type="submit"/>
      </form>
    );
  }
}

export default App;
