import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/searchActions';
import { bindActionCreators } from 'redux';
import { Form, FormControl, ControlLabel, Button, FormGroup } from 'react-bootstrap';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gymType: '',
      zipCode: 0,
      radius: 25
    };
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineType">
          <ControlLabel>Gym Type</ControlLabel>
          {' '}
          <FormControl type="text" />
        </FormGroup>
          {' '}
        <FormGroup controlId="formInlineZipCode">
          <ControlLabel>Zip Code</ControlLabel>
          {' '}
          <FormControl type="number" pattern="[0-9]{5}" />
        </FormGroup>
          {' '}
        <FormGroup controlId="formInlineRadius">
          <ControlLabel>Radius</ControlLabel>
          {' '}
          <FormControl type="number" pattern="[0-9]{5}" />
        </FormGroup>
          {' '}
        <Button type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);