import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Navigation from './navigation';

export default class App extends Component {
      
  render() {
    return (
      <MuiThemeProvider>
        <div style={{"width": "100%", "height": "100%"}}>
          <Navigation />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

