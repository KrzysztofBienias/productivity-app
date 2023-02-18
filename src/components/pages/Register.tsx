import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { registerSchema } from '../../schema/account';
import LoginTemplate from '../templates/LoginTemplate';
import FormInput from '../molecules/FormInput/FormInput';

interface IUser {
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const { signUp } = useAuth();

    const initialValues: IUser = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values: IUser, actions: FormikHelpers<IUser>) => {
        signUp(values.email, values.password);
        actions.resetForm();
    };

    return (
        <LoginTemplate>
            <div className="glass px-4 p-8 pb-2 sm:px-6 md:px-6 md:pt-10 md:pb-4 2xl:p-8">
                <h1 className="text-center pb-2 text-2xl md:text-3xl 2xl:text-3xl">Register</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                    validationSchema={registerSchema}
                >
                    {({ errors, touched, handleBlur, isValid, dirty }) => {
                        return (
                                <FormInput
                                    name="Email"
                                    placeholder="Enter your email"
                                    handleBlur={handleBlur}
                                    error={errors.email}
                                    touched={touched.email}
                                />
                                <FormInput
                                    name="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    handleBlur={handleBlur}
                                    error={errors.password}
                                    touched={touched.password}
                                />
                                <FormInput
                                    name="Confirm password"
                                    htmlFor="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    handleBlur={handleBlur}
                                    error={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                />
                                <button
                                    disabled={!(isValid && dirty)}
                                    type="submit"
                                    className={`glass px-4 py-1 mt-8 mb-2 ${
                                        isValid && dirty ? 'opacity-100 cursor-pointer' : 'opacity-30 cursor-not-allowed'
                                    }`}
                                >
                                    Submit
                                </button>
                            </Form>
                        );
                    }}
                </Formik>

                <p className="mt-2">
                    Already have an account?
                    <Link to="/login" className="pl-4 py-2">
                        Log in
                    </Link>
                </p>
            </div>
        </LoginTemplate>
    );
};

export default Register;
