import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MovieForm from './movie_form.jsx';

const customContentStyle = {
  width: '25%',
  maxWidth: 'none',
};

export default class DialogModal extends React.Component {
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
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,*/
      /*<FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,*/
    ];

    return (
      <div>
        <RaisedButton label="Add a movie" onTouchTap={this.handleOpen} />
        <Dialog
          title="Add a movie"
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <MovieForm />
        </Dialog>
      </div>
    );
  }
}