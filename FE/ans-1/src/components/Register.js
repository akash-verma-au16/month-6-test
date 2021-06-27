import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import {
  Form,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

export class Register extends Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    gender: 'Select Gender',
    about: null,
    termsAndConditions: null,
    isEmail: false,
    isGender: false,
  };

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSelect = (e) => {
    const gender = e.split('#')[1];
    this.setState({ ...this.state, gender, isGender: false });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.gender === 'Select Gender') {
      return this.setState({ ...this.state, isGender: true });
    }

    if (!isEmail(this.state.email)) {
      return this.setState({ ...this.state, isEmail: true });
    }

    console.log('Details: ', this.state);
    this.setState({
      ...this.state,
      isEmail: false,
      isGender: false,
      gender: 'Select Gender',
    });
  };

  render() {
    return (
      <div className='p-3 border rounded' style={{ width: '500px' }}>
        <h3 className='text-primary text-center'>Register</h3>
        <Form className='mt-5' onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                placeholder='First name'
                onChange={this.onChange}
                required
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                placeholder='Last name'
                onChange={this.onChange}
                required
              />
            </Col>
          </Row>

          <Form.Group controlId='email' className='mt-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={this.onChange}
              required
            />
            {this.state.isEmail && (
              <h6 className='alert alert-danger mt-2'>
                Enter a valid email address
              </h6>
            )}
          </Form.Group>

          <Form.Group
            controlId='gender'
            className='mt-3 d-flex justify-content-between'
          >
            <Form.Label>Gender</Form.Label>
            <DropdownButton
              id='gender-select'
              className='me-3'
              title={this.state.gender}
            >
              <Dropdown.Item href='#Male' onSelect={this.onSelect}>
                Male
              </Dropdown.Item>
              <Dropdown.Item href='#Female' onSelect={this.onSelect}>
                Female
              </Dropdown.Item>
              <Dropdown.Item href='#Other' onSelect={this.onSelect}>
                Other
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          {this.state.isGender && (
            <h6 className='alert alert-danger mt-2'>Please select a Gender</h6>
          )}

          <Form.Group controlId='textarea' className='d-flex mt-3'>
            <Form.Label className='me-3'>About</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='about'
              placeholder='About Yourself'
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId='t-and-c' className='mt-3'>
            <Form.Check
              type='checkbox'
              name='termsAndConditions'
              required
              label='I Understand and Agree to the Terms And Conditions.'
              onChange={this.onChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='mt-3 w-100'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
