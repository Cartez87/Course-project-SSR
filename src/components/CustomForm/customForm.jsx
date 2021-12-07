import React, { useState } from "react";
import Toggle from '../Toggle';
import CustomDatePicker from '../DatePicker';
import Button from "../Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Errortext from './ErrorText';
import './CustomForm.scss';

const initialValues = {
  title: '',
  poster_path: '',
  rating: '',
  releaseDate: null,
  runtime: '',
  overview: '',
  genres: []
}

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.resetForm();
  console.log('sd', JSON.parse(JSON.stringify(values)));
}

const validationSchema = Yup.object({
  title: Yup.string().required('Required field'),
  poster_path: Yup.string().required('Required field'),
  overview: Yup.string().required('Required field'),
  runtime: Yup.string().required('Required field'),
})

const CustomForm = () => {

    return (
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="form-row d-flex">
            <div className="form-col">
              <label htmlFor="title">Title</label>
              <Field 
                type="text" 
                className="form-control" 
                id="title" 
                name="title" 
                placeholder="Title"
              />
              <ErrorMessage data-testid="error" name="title" component={Errortext}/>
            </div>
            <div className="form-col">
              <label htmlFor="releaseDate">RELEASE DATE</label>
              <CustomDatePicker 
                id="releaseDate" 
                name="releaseDate"
              />
            </div>
          </div>
          <div className="form-row d-flex">
            <div className="form-col">
              <label htmlFor="poster_path">Movie url</label>
              <Field 
                type="text" 
                className="form-control" 
                id="poster_path" 
                name="poster_path" 
                placeholder="https://"
              />
              <ErrorMessage name="poster_path" component={Errortext}/>
            </div>
            <div className="form-col">
              <label htmlFor="rating">RATING</label>
              <Field 
                type="text" 
                className="form-control" 
                id="rating" 
                name="rating" 
                placeholder="7.8"
              />
            </div>
          </div>
          <div className="form-row d-flex">
            <div className="form-col">
              <label>genre</label>
              <Toggle />
            </div>
            <div className="form-col">
              <label htmlFor="runtime">RUNTIME</label>
              <Field 
                type="text" 
                className="form-control"
                id="runtime" 
                name="runtime" 
                placeholder="minutes"
              />
              <ErrorMessage name="runtime" component={Errortext}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="overview">OVERVIEW</label>
              <Field as='textarea' 
                className="form-control" 
                id="overview" 
                name="overview" 
                placeholder="Movie description"
              />
              <ErrorMessage name="overview" component={Errortext}/>
            </div>
          </div>
          <div className="btns-row d-flex justify-content-end">
            <Button 
              color="TRANSPARENT"
              type="reset"
            >Reset</Button>
            <Button 
              color="PRIMARY"
              type="submit"
              data-testid="custom-element"
            >Submit</Button>
          </div>
        </Form>
      </Formik>
    );
}

export default CustomForm;