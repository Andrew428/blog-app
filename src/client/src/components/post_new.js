import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
class PostNew extends Component {

    renderField(field){

        const { meta: { touched, error} } = field;       
        const className = `form-group ${touched && error ? "has-danger" : ""}`
        const inputClassName = `form-control form-control-${field.classname}`
        const labelClassName = `form-control-${field.classname}`
        // return(
        //     <div className={className}>
        //         <label>{field.label}</label>
        //         <input className="form-control"
        //             type={field.type}
        //             {...field.input}
        //         />
        //         <div className="text-help">
        //         {touched ? error : ""}
        //        </div>
        //     </div>
        // );

        if(field.type === "textarea"){
            return(
                <div className={`${className} ${field.classname}`}>
                    <label className={labelClassName}>{field.label}</label>
                    <textarea className={inputClassName} 
                        rows={field.rows}
                        type={field.type}
                        {...field.input}
                    />
                    <div className="text-help">
                        {touched ? error : ""}
                    </div>
                </div>
            );
        }else if(field.type === "text"){
            return(
                <div className={`${className} ${field.classname}`}>
                    <label className={labelClassName}>{field.label}</label>
                    <input className={inputClassName}
                        type={field.type}
                        {...field.input}
                    />
                    <div className="text-help">
                        { touched ? error : ""}
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }
    } 

    async onSave(values){
        //console.log(values);        
        await this.props.createPost(values);
        this.props.history.push('/');
    }

    render() {
        const { handleSubmit } = this.props;


        return (
            <div>
                <form onSubmit={handleSubmit(this.onSave.bind(this))}>
                    <Field 
                            name="title"
                            class-name="title"
                            label="Title"
                            type="text"
                            component={this.renderField}
                    />
                    <Field 
                            name="categories"
                            class-name="categories"
                            label="Tags"
                            type="text"
                            component={this.renderField}
                    />
                    <Field 
                            name="content"
                            class-name="content"
                            label="Content"
                            type="textarea"
                            rows="10"
                            component={this.renderField}
                    /> 
                    <button type="submit" className="btn btn-primary">Save Post</button>   
                    <Link className="btn btn-danger" to="/">Cancel</Link> 
                
                </form>                 
                                
            </div>
        );
  }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title!";        
    }
    if(!values.categories){
        errors.categories = "Enter some tags!";
    }
    if(!values.content){
        errors.content = "Enter some content!";
    }

    // If errors is empty the form is good to go
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
);

