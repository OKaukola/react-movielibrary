import React, { Component } from "react";
import Center from 'react-center';

export default class MovieInfoPage2 extends Component {
    render() {
        const { rowData } = this.props;

        return (
            <div>
                <table style={{ "width": "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ "width": "40%" }}>Name</td>
                            <td>{rowData.name}</td>
                        </tr>
                        <br />
                        <tr>
                            <td style={{ "width": "40%" }}>Year of publication</td>
                            <td>{rowData.year}</td>
                        </tr>    
                        <br />
                        <tr>
                            <td style={{ "width": "40%" }}>IMDb link</td>
                            <td><a href={rowData.imdb}>{rowData.imdb}</a></td>
                        </tr>
                        <br />
                    </tbody>
                </table>
            </div>
        )
    }
}


