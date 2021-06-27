import React, { useState, useRef } from 'react';
import uuid from 'uuid';
import Task from './Task';
import Edit from './Edit';
import Add from './Add';

const Todo = () => {
  const [state, setState] = useState({
    tasks: [],
    current: '',
    edit: null,
  });
  const textRef = useRef(null);

  const onChange = (e) => setState({ ...state, current: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, tasks: [...state.tasks, state.current] });
  };

  const deleteTask = (e) => {
    setState({
      ...state,
      tasks: state.tasks.splice(parseInt(e.target.parentElement.id), 1),
    });
  };

  const setCurrentTask = (e) =>
    setState({ ...state, edit: parseInt(e.target.id) });

  const handleEdit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      tasks: state.tasks.map((task, index) => {
        if (index === parseInt(e.target.id)) {
          return textRef.current.value;
        } else {
          return task;
        }
      }),
      edit: null,
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
        {state.tasks.map((task, index) => {
          if (state.edit !== index) {
            return (
              <Task
                id={index}
                key={uuid.v4()}
                task={task}
                deleteTask={deleteTask}
                setCurrentTask={setCurrentTask}
              />
            );
          } else {
            return (
              <Edit
                id={index}
                key={uuid.v4()}
                handleEdit={handleEdit}
                textRef={textRef}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Todo;
