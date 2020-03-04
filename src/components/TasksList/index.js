import React            from 'react';
import PropTypes        from 'prop-types';
import listWithData     from '../HOCs/listWithData.js';
import { getUserTasks } from '../../api';

function TasksList (props) {

  const { items, isFetching, error, } = props;

  return (
    <ol>
      {
        items.map( item => (<li key={item.id}>{`${item.value} ${item.isDone}`}</li>) )
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

export default listWithData( getUserTasks, TasksList );