import React                      from 'react';
import './App.css';
import { postTask, getUserTasks } from './api';

class App extends React.Component {

  constructor (props) {
    super( props );
    this.state = {
      value: '',
      deadline: '',
      isDone: false,
      isFetching: false,
      tasks: [],
      error: null,
    };
  }

  async componentDidMount () {
    try {
      this.setState( {
                       isFetching: true
                     } );
      const { data: tasks } = await getUserTasks();

      this.setState( {
                       tasks
                     } );

    } catch (e) {
      this.setState( {
                       error: e.response.error,
                     } );
    } finally {
      this.setState( {
                       isFetching: false,
                     } );
    }

  }

  createTask = async (e) => {
    e.preventDefault();
    const { data } = await postTask( {
                                       value: this.state.value,
                                       deadline: this.state.deadline,
                                       isDone: this.state.isDone,
                                     } );
    this.setState( {
                     tasks: [data, ...this.state.tasks]
                   } );
  };

  handleChange = e => {
    const { target } = e;
    this.setState( {
                     [target.name]: target[target.type === 'checkbox'
                                           ? 'checked'
                                           : 'value'],
                   } );
  };

  render () {

    const { value, deadline, isDone, tasks, isFetching } = this.state;

    return (
      <div>
        <form onSubmit={this.createTask}>
          <label htmlFor="taskValueInput">
            <span>Task value: </span>
            <input id="taskValueInput" type="text" name="value" value={value} onChange={this.handleChange}/>
          </label>
          <br/>
          <label htmlFor="taskDateInput">
            <span>Task deadline: </span>
            <input id="taskDateInput" type="date" name="deadline" value={deadline} onChange={this.handleChange}/>
          </label>
          <br/>
          <label htmlFor="taskIsDoneInput">
            <span>Is done: </span>
            <input id="taskIsDoneInput" type="checkbox" name="isDone" checked={isDone}
                   onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit"/>
        </form>
        <ul>
          {
            isFetching && <li>Loading...</li>
          }
          {
            tasks.map( item => (
              <li key={item.id}>{`${item.value} ${item.deadline}. Completed: ${item.isDone}`}</li>
            ) )
          }
        </ul>
      </div>
    );
  }
}

export default App;
