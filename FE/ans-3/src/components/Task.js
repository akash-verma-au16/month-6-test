import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, task, deleteTask, setCurrentTask }) => (
  <li
    id={id}
    className='list-group-item text-capitalize pb-4 pt-3'
    onClick={setCurrentTask}
  >
    <span>{task}</span>
    <span className='float-end btn btn-danger' onClick={deleteTask}>
      x
    </span>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrentTask: PropTypes.func.isRequired,
};

export default Task;
