import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const customContentStyle = {
  width: '25%',
  maxWidth: 'none',
};

class DialogModalTest extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { buttonLabel, title, form, button } = this.props;
    const actions = [
      <RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
    ];
    //<Link to={this.props.myroute} onClick={this.handleOpen}>{buttonLabel}</Link> 

    return (
      <div>
        {button}
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.movieState.mode}
          onRequestClose={this.handleClose}
        >
          {form}
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieState: state.mov
  };
}

export default connect(mapStateToProps)(DialogModalTest);