import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class Filter extends Component {
  static propTypes = {
    setFilter: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
  }

  setFilter = (e) => {
    this.props.setFilter(e.target.value);
  }

    render() {
        return (
            <TextField hintText="Search..." floatingLabelText="Search..." onChange={this.setFilter} style={{"width": "100%"}}/>    
        );
    }
}

export default Filter;
