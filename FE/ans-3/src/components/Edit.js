import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Edit = ({ id, handleEdit, textRef }) => (
  <li className='list-group-item text-capitalize pb-4 pt-3'>
    <Form id={id} onSubmit={handleEdit} className='w-100'>
      <Form.Group>
        <Form.Control
          type='text'
          ref={textRef}
          placeholder='Enter Changes'
          required
        />
      </Form.Group>
    </Form>
  </li>
);

Edit.propTypes = {
  id: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Edit;
