import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../schema/account';
import useAuth from '../../hooks/useAuth';
import LoginTemplate from '../templates/LoginTemplate';
import FormInput from '../molecules/FormInput/FormInput';

interface IUser {
    email: string;
    password: string;
}

const Login = () => {
    const { signIn } = useAuth();

    const initialValues: IUser = {
        email: '',
        password: '',
    };

    const handleSubmit = (values: IUser, actions: FormikHelpers<IUser>) => {
        signIn(values.email, values.password);
        actions.resetForm();
    };

    return (
        <LoginTemplate>
            <div className="glass px-4 p-8 pb-2 sm:px-6 md:px-6 md:pt-10 md:pb-4 2xl:p-8">
                <h1 className="text-center pb-2 text-2xl md:text-3xl 2xl:text-3xl">Login</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                    validationSchema={loginSchema}
                >
                    {({ handleBlur }) => {
                        return (
                                <FormInput name="Email" placeholder="Enter your email" handleBlur={handleBlur} />
                                <FormInput
                                    name="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    handleBlur={handleBlur}
                                />

                                <button type="submit" className="glass px-4 py-1 mt-8 mb-2">
                                    Submit
                                </button>
                            </Form>
                        );
                    }}
                </Formik>

                <p className="mt-2">
                    Need an account?
                    <Link to="/register" className="pl-4 py-2">
                        Sign up
                    </Link>
                </p>
            </div>
        </LoginTemplate>
    );
};

export default Login;
