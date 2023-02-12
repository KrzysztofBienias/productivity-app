import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 chars, 1 upper, 1 lower, 1 digit

export const registerSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required!'),
    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .matches(passwordRules, 'Please create a stronger password')
        .required('Required!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('Required!'),
});

export const loginSchema = yup.object().shape({
    email: yup.string().required('Required!'),
    password: yup.string().required('Required!'),
});
