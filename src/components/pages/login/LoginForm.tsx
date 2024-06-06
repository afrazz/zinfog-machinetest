import { FormError, Spacer } from "components/common";
import { Button, Input } from "components/ui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from "hooks/useStore";
import { signIn } from "store/slices/authSlice";
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
  user_name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-9 bg-secondary w-4/5 flex-hv-center flex-col rounded-2xl shadow-md">
      <h3 className="text-2xl text-primary">Login</h3>

      <Formik
        initialValues={{
          user_name: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { user_name, password } = values;

          setSubmitting(true);
          // same shape as initial values
          dispatch(signIn({ user_name, password }));
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <Input
              label="Username"
              name="user_name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user_name}
            />

            <ErrorMessage name="user_name">
              {(msg) => <FormError msg={msg} />}
            </ErrorMessage>

            <Spacer mClass="mt-2" />
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage name="password">
              {(msg) => <FormError msg={msg} />}
            </ErrorMessage>

            <Spacer mClass="mt-5" />
            {/* <button type="submit">submit</button> */}
            <Button
              text="Submit"
              type="primary"
              disabled={isSubmitting}
              htmlType="submit"
            />
          </form>
        )}
      </Formik>
      <Spacer mClass="mt-5" />
      <p className="text-base text-dark underline font-medium">
        Reset Password
      </p>
    </div>
  );
};

export default LoginForm;
