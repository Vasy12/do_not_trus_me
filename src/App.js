import React                      from 'react';
import './App.css';
import UsersList                  from './components/UsersList';
import TasksList                  from './components/TasksList';
import DataLoader                 from './components/DataLoader';
import { getUsers, getUserTasks } from './api';

function App () {
  return (
    <div style={{ display: 'flex' }}>
      <DataLoader getData={getUserTasks} render={({ items, ...rest }) => {
        return <TasksList {...rest} tasks={items}/>;
      }}/>

      <DataLoader getData={getUsers} render={({ items, ...rest }) => {
        return <UsersList {...rest} users={items}/>;
      }}/>

    </div>
  );
}

export default App;
