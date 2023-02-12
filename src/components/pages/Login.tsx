import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { loginSchema } from '../../schema/account';

interface IUser {
    email: string;
    password: string;
}

const Login = () => {
    const initialValues: IUser = {
        email: '',
        password: '',
    };

    const handleSubmit = (values: IUser, actions: FormikHelpers<IUser>) => {
        actions.resetForm();
    };

    return (
        <div className="background-gradient w-screen h-screen flex justify-center items-center">
            <div className="glass px-4 p-8 pb-2 sm:px-6 md:px-6 md:pt-10 md:pb-4 2xl:p-8">
                <h1 className="text-center pb-2 text-2xl md:text-3xl 2xl:text-3xl">Login</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                    validationSchema={loginSchema}
                >
                    {({ handleBlur }) => {
                        return (
                            <Form className="flex flex-col">
                                <label htmlFor="email" className="pt-2 md:pt-4">
                                    Email
                                </label>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    onBlur={handleBlur}
                                    className="glass px-4 py-1"
                                />
                                <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />

                                <label htmlFor="password" className="pt-2 md:pt-4">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onBlur={handleBlur}
                                    className="glass px-4 py-1"
                                />
                                <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />

                                <button type="submit" className="glass px-4 py-1 mt-8 mb-2">
                                    Submit
                                </button>
                            </Form>
                        );
                    }}
                </Formik>

                <p className="mt-2">
                    Need an account?
                        Sign up
                </p>
            </div>
        </div>
    );
};

export default Login;
