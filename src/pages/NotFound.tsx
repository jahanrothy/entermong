import {Link} from "react-router-dom";

const NotFound:React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-6 text-blue-500 underline">
                Go back to the homepage
            </Link>
        </div>
    )
}

export default NotFound