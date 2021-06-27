import React, { useState } from 'react';
import uuid from 'uuid';
import Task from './Task';
import Add from './Add';

const Todo = () => {
  const [state, setState] = useState({
    tasks: [],
    current: '',
  });

  const onChange = (e) => setState({ ...state, current: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, tasks: [...state.tasks, state.current] });
  };

  const deleteTask = (e) => {
    setState({
      ...state,
      tasks: state.tasks.filter(
        (task) => task !== e.target.parentElement.firstChild.innerText
      ),
    });
  };

  return (
    <div className='p-3'>
      <h1 className='text-center text-uppercase py-2 text-danger'>
        to do list
      </h1>
      <Add submit={onSubmit} change={onChange} />
      <ul className='bg-secondary px-5 pt-3 pb-5'>
        <hr />
        {state.tasks.length === 0 && (
          <h5 className='text-center text-primary'>Add a Task</h5>
        )}
        {state.tasks.map((task) => (
          <Task key={uuid.v4()} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
