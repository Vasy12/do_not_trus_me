import React     from 'react';
import PropTypes from 'prop-types';

function TasksList (props) {

  return (
    <ul>

    </ul>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf( PropTypes.shape( {
                                               id: PropTypes.oneOfType( [
                                                                          PropTypes.string,
                                                                          PropTypes.number,

                                                                        ] ).isRequired,
    value: PropTypes.string.isRequired,
    deadline: PropTypes.string,


                                             } ) )
};

export default TasksList;
