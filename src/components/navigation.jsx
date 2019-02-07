import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RegisterDialogModal from './register_popup_dialog.jsx'

class Navigation extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={100}><Link to="logout">Logout</Link></li>,
        <li key={101}><Link to="programmers">Programmers</Link></li>,
        <li key={102}><RegisterDialogModal /></li>,
        <li key={103}><Link to="movies">Movies</Link></li>,
      ];
    }
    else {
      return [
        <li key={1}><Link to="login">Login</Link></li>
      ];
    }
  }

  render() {
    return (
      <div className="frame bit-1 navigation_container">
        <h3 className="bit-40"><img src="./src/assets/images/film_reel.jpg" height="50" width="50" />Movie Library</h3>
        <ul className="bit-60 nav_menu">
          {this.renderLinks()}
        </ul>
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateProps)(Navigation); 

