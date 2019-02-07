import React from 'react';
import Center from 'react-center';
import DialogModal from './popup_dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { getMovie, deleteMovie, openDialog } from '../actions/index.js';
import { connect } from 'react-redux';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import components from './griddleComponents/index.js'
import MovieInfoDialogModal from './movieinfo_popup_dialog'
import DialogModalTest from './popupComponent'


class Movies extends React.Component {

    componentWillMount() {
        this.props.getMovie();
    }

    render() {
        const rowDataSelector = (state, { griddleKey }) => {
            return state
                .get('data')
                .find(rowMap => rowMap.get('griddleKey') === griddleKey)
                .toJSON();
        };

        const enhancedWithRowData = connect((state, props) => {
            return {
                // rowData will be available into MyCustomComponent
                rowData: rowDataSelector(state, props)
            };
        });

        const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <Filter />
                <br />
                <Table />
                <Pagination />
            </div>
        );

        const deleteButton = ({ value, griddleKey, rowData, }) => (
            <div>
                <RaisedButton label="Delete" onTouchTap={() => this.props.deleteMovie(rowData._id)} />
            </div>
        );

        const imdbURL = ({ value, griddleKey, rowData }) => (
            <div>
                <a href={value}>{value}</a>
            </div>
        );

        const test = ({ value, griddleKey, rowData }) => (
            <div>
                <MovieInfoDialogModal linkLabel={value} rowData={rowData} />
            </div>
        );

        const sortProperties = [
            { id: 'name', sortAscending: true }
        ];

        return (
            <div id="content" style={{ "background-image": "url(./src/assets/images/free_web_background_by_kgombocka-d4gz410.jpg)", "height": "100%", "background-attachment": "fixed" }}>
                <h1 style={{ "textAlign": "center", "textShadow": "2px 2px 2px grey", "fontSize": "40px" }}>Movies</h1>
                <Center>
                    <DialogModal /><br />
                </Center>
                <Center>
                    <Griddle data={this.props.movieState.movies} plugins={[plugins.LocalPlugin]} sortProperties={sortProperties} components={components}>
                        <RowDefinition>
                            <ColumnDefinition id="name" title="Name" customComponent={enhancedWithRowData(test)} width={300} />
                            <ColumnDefinition id="year" title="Year" width={75} />
                            <ColumnDefinition id="imdb" title="IMDb link" customComponent={imdbURL} width={300} />
                            <ColumnDefinition id="" title="" customComponent={enhancedWithRowData(deleteButton)} />
                        </RowDefinition>
                    </Griddle>
                </Center>
                <br />
                <br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieState: state.mov
    };
}

export default connect(mapStateToProps, { getMovie, deleteMovie, openDialog })(Movies);