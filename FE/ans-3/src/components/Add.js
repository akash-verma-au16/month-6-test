import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';

const Add = ({ submit, change }) => (
  <div className='bg-secondary pt-3 px-5'>
    <Form inline className='d-flex' onSubmit={submit}>
      <FormControl
        id='new-task'
        type='text'
        placeholder='New Task'
        className='mr-sm-2 w-75'
        onChange={change}
        required
      />
      <Button variant='success' type='submit' size='lg' className='w-25'>
        ADD
      </Button>
    </Form>
  </div>
);

Add.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

export default Add;
