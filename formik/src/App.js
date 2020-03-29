import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  return (
    <div className="App">
        <h1>Formik Test</h1>
      <div>

        <Formik
          initialValues={{ name: '', email: '' }}
          validate={values => {
            const errors = {};

            //check email
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if ( !values.email.includes("@noseryoung.ch")){
              errors.email = "keine Noser adresse";
            }

            //check name
            if (!values.name) {
              errors.name = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >

          {({ isSubmitting }) => (
            <Form>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" style={{color: "red"}} />
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{color: "red"}}/>
              <button type="submit" disabled={isSubmitting}>
                Submit
          </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
