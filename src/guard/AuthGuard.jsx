import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/UseUser';

export const AuthGuard = ({ children, redirectTo = '/' }) => {
	const { user } = useUser();
	const { token } = user;

	if (!token) return <Navigate to={redirectTo} />;

	return children ? children : <Outlet />;
};
