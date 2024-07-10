import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function ProtectedRoute({ children }) {
	// get cookie from browser if logged in
	const token = cookies.get('TOKEN');

	// If there is no valid token, navigate to the login page
	if (!token) {
		return <Navigate to="/auth/login" replace />;
	}

	// If there is a valid token, render the children components (protected content)
	return children;
}
