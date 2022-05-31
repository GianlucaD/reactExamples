import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

function LoginForm() {
  return (
    <div>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          // begin validation
          validate={(values) => {
            const errors: { [field: string]: string } = {};
            //check email
            if (!values.email) {
              errors.email = "Email Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.email.includes("@noseryoung.ch")) {
              errors.email = "keine Noser adresse";
            }

            //check password
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          // end validation
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h1>LoginForm</h1>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="Errormessage"
              />
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="Errormessage"
              />
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

export default LoginForm;
