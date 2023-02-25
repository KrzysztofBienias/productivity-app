interface IErrorMessage {
    message?: string;
}

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage: React.FC<IErrorMessage> = ({ message = defaultErrorMessage }) => {
    return (
        <div
            className="w-3/4 md:w-auto absolute left-1/2 -translate-x-1/2 bottom-[10%] glass p-8 pt-12 border-4 border-red-500 rounded-3xl z-40 animate-errorSlide   
            before:absolute before:left-1/2 before:top-4 before:-translate-x-1/2 before:bg-red-200 before:w-16 before:h-1.5 before:rounded-full
            after:absolute after:left-1/2 after:top-4 after:-translate-x-1/2 after:bg-red-500 after:w-16 after:h-1.5 after:rounded-full after:scale-x-100 after:origin-top-left after:animate-errorShrink"
        >
            <h1 className="text-xl md:text-4xl font-bold pb-2 text-red-500">Oops!</h1>
            <p className="text-sm md:text-xl text-red-400">{message}</p>
        </div>
    );
};

export default ErrorMessage;
