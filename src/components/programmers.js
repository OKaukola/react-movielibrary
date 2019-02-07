import React, { Component } from "react";
import Center from 'react-center';


export default class Programmers extends Component {
  render() {
    return (
      <div style={{ "background-image": "url(./src/assets/images/free_web_background_by_kgombocka-d4gz410.jpg)", "height": "100%", "background-attachment": "fixed" }}>
        <h1 style={{ "textAlign": "center", "textShadow": "2px 2px 2px grey", "fontSize": "40px" }}>Programmers</h1>
        <br />
        <br />
        <Center>
          <img src="./src/assets/images/code-react-opt.jpg" className="pic-radius" height="450" width="450" />
        </Center>
        <br />
        <br />
        <p style={{ "textAlign": "center" }}>OK</p>
      </div>
    );
  }
}
