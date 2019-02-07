
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as actions from '../actions';

const form = reduxForm({
  form: 'movies'
});

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderField = field => (
    <div>
      <div className="input_container">
        <input className="form-control" {...field.input}/>
      </div>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

const renderTextArea = field => (
  <div>
    <div className="input_container">
      <textarea {...field.input}/>
    </div>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class MovieForm extends Component {

  handleFormSubmit(formProps) {
    this.props.submitMovie(formProps);
    this.props.initialize('');
  }

  render() {
     const { handleSubmit, pristine, reset, submitting } = this.props;

     return (
       <div>
         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
           <Field name="name" component={renderTextField} label="Name" validate={value => {if (!value || value.trim() === '') {return "Enter the movie title";}}}/>
           <br/>
           <Field name="year" component={renderTextField} label="Year of publication" validate={value => {if (!value || value.trim() === '') {return "Enter the movie release year";}}}/>
           <br/>
           <Field name="imdb" component={renderTextField} label="IMDb link" validate={value => {if (!value || value.trim() === '') {return "Enter the movie imdb address";}}}/>
           <br/>
           <br/>
           <RaisedButton label="Save movie" onTouchTap={handleSubmit(this.handleFormSubmit.bind(this))} /><RaisedButton label="Clear values" onTouchTap={reset} disabled={pristine || submitting} />   
         </form>
       </div>
     )
   }
 }

 function mapStateToProps(state) {
   return {
     formValues: state.form
   };
 }

 export default connect(mapStateToProps, actions)(form(MovieForm));