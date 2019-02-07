import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Center from 'react-center';
import { loginUser } from '../../actions/auth';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

class Login extends Component {
    handleFormSubmit(formProps) {
        this.props.loginUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div>
                    <span><strong>Error!</strong>{this.props.errorMessage}</span>
                </div>
            );
        }
    }
    /*
        margin:10px 5px 15px 20px;
        top margin is 10px
        right margin is 5px
        bottom margin is 15px
        left margin is 20px
        */

    //style={{ "border": "5px solid black", "margin": "10px 400px 15px 400px" }}
    render() {
        const { handleSubmit } = this.props;

        return (
            <div style={{ "background-image": "url(./src/assets/images/free_web_background_by_kgombocka-d4gz410.jpg)", "height": "100%"  }}>

                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    {this.renderAlert()}
                    <div>
                        <h1 style={{ "textAlign": "center" }}>Welcome to Movie Library</h1>
                        <Paper zDepth={2} style={{ "margin": "10px 400px 15px 400px" }}>
                            <div  >
                                <Center>
                                    <img src="./src/assets/images/green-user-icon.png" height="30" width="30" />
                                    <Field name="email" component={renderTextField} label="Email" type="text" />
                                </Center>
                                <br />
                                <Center>
                                    <img src="./src/assets/images/green-lock-icon.png" height="30" width="30" />
                                    <Field name="password" component={renderTextField} label="Password" type="password" />
                                </Center>
                                <br />
                                <Center>
                                    <RaisedButton label="Login" onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} />
                                </Center>
                                <br />
                            </div>
                        </Paper>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        authenticated: state.auth.authenticated,
    };
}

const form = reduxForm({
    form: 'login',
});

export default connect(mapStateProps, { loginUser })(form(Login));
