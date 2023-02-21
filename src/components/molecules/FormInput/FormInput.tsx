import { ErrorMessage, Field } from 'formik';

interface IFormInput {
    name: string;
    htmlFor?: string;
    type?: string;
    placeholder: string;
    handleBlur: any;
    error?: string | undefined;
    touched?: boolean | undefined;
}

const FormInput: React.FC<IFormInput> = ({ name, htmlFor, type = 'text', placeholder, handleBlur, error, touched }) => {
    return (
        <div className="py-3 px-5 w-full md:py-4">
            <label htmlFor={htmlFor ? htmlFor : name}>{name}</label>

            <Field
                type={type}
                name={htmlFor ? htmlFor : name.toLowerCase()}
                placeholder={placeholder}
                onBlur={handleBlur}
                className={`glass mt-1 px-4 pl-8 py-3 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:border-transparent
                    ${error && touched && 'border border-red-500'} 
                `}
            />

            <ErrorMessage name={htmlFor ? htmlFor : name.toLowerCase()} component="p" className="text-red-500 text-sm absolute" />
        </div>
    );
};

export default FormInput;
