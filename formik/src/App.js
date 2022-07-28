import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Formik Test</h1>
      <div>
        <Formik
          initialValues={{ name: "", email: "" }}
          validate={(values) => {
            console.log("hello");
            const errors = {};
            if (values.name.length < 3) {
              errors.name = "Name zu kurz";
            }
            return errors;
          }}
          onSubmit={(values, { isSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 4000);
          }}
        >
          {(props) => (
            <Form>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
              <button type="submit" disabled={props.isSubmitting}>
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
