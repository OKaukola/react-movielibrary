import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Register from './auth/register';
import { Link } from 'react-router';

const customContentStyle = {
  width: '25%',
  maxWidth: 'none',
};

export default class RegisterDialogModal extends React.Component {
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
    const actions = [
      /*<RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,*/
      /*<FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,*/
    ];
    //< label="Register user" onTouchTap={this.handleOpen} />
    return (
      <div>
        <Link to={this.props.myroute} onClick={this.handleOpen}>Register</Link>
        <Dialog
          title="Register user"
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Register />
        </Dialog>
      </div>
    );
  }
}