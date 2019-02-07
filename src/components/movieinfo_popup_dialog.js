import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MovieInfoPage2 from './movieInfoPage2'
import Register from './auth/register';


const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
  hight: '70%',
  maxHight: 'none'
};

export default class MovieInfoDialogModal extends React.Component {
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
    const { linkLabel, rowData } = this.props;
    return (
      <div>
        <a onClick={this.handleOpen}>{linkLabel}</a>
        <Dialog
          title="Movie information"
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <MovieInfoPage2 rowData={rowData} />
        </Dialog>
      </div>
    );
  }
}