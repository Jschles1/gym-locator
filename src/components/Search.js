import React, { Component } from 'react';
import { FormControl, ControlLabel, Button, FormGroup } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <FormGroup>
          <p>Gym Type</p>
        </FormGroup>

        <FormGroup>
          <FormControl 
            type="number"
          />
        </FormGroup>

        <Button type="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;