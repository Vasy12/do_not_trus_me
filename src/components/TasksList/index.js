import React     from 'react';
import PropTypes from 'prop-types';

function TasksList (props) {

  const { tasks, isFetching, error, } = props;

  return (
    <ol>
      {
        tasks.map( item => (<li key={item.id}>{`${item.value} ${item.isDone}`}</li>) )
      }
      {
        isFetching && (<li>Loading...</li>)
      }
    </ol>
  );

}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType( [
                                                                          PropTypes.string,
                                                                          PropTypes.number,
                                                                        ] ).isRequired,
                                               value: PropTypes.string.isRequired,
                                               isDone: PropTypes.bool.isRequired,
                                               deadline: PropTypes.string.isRequired,

                                             } ) ).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default TasksList;