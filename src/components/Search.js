import React, { Component } from 'react';
import { Form, FormControl, ControlLabel, Button, FormGroup } from 'react-bootstrap';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <Button type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default Search;