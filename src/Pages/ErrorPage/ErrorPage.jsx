import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center p-20">
                <h1 className="text-6xl font-extrabold py-7"> Error !!! </h1>
                <p className="text-2xl font-bold">
                    {
                        error.statusText || error.message
                        
                    }

                    <p className="py-7">
                    {
                        error.message || error.data
                    }
                    </p>
                </p>

                <div className="py-7">
                    <Link to='/' className="btn" > Go Back Home </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;