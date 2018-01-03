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
      zipCode: '',
      radius: 25
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    this.props.actions.searchGyms(this.state);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleOnSubmit}>
        <FormGroup controlId="formInlineType">
          <ControlLabel>Gym Type</ControlLabel>
          {' '}
          <FormControl value={this.state.gymType} onChange={this.handleOnChange} name="gymType" type="text" />
        </FormGroup>
          {' '}
        <FormGroup controlId="formInlineZipCode">
          <ControlLabel>Zip Code</ControlLabel>
          {' '}
          <FormControl value={this.state.zipCode} onChange={this.handleOnChange} name="zipCode" type="number" pattern="[0-9]{5}" />
        </FormGroup>
          {' '}
        <FormGroup controlId="formInlineRadius">
          <ControlLabel>Radius</ControlLabel>
          {' '}
          <FormControl value={this.state.radius} onChange={this.handleOnChange} name="radius" type="number" pattern="[0-9]{5}" />
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