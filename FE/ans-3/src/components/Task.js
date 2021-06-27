import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, deleteTask }) => (
  <li className='list-group-item text-capitalize pb-4 pt-3'>
    <span>{task}</span>
    <span className='float-end btn btn-danger' onClick={deleteTask}>
      x
    </span>
  </li>
);

Task.propTypes = {
  task: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
