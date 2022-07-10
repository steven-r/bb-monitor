import React, { FC, lazy } from 'react';
import { useFirebaseUser } from '../../contexts/firebaseContext';

type IIsAuthProps = {
	isAuthenticated: React.ReactNode;
	isNotAuthenticated?: React.ReactNode;
};

const IsAuth: FC<IIsAuthProps> = ({ isAuthenticated, isNotAuthenticated }) => {
	const user = useFirebaseUser();
	if (user) return <>{isAuthenticated}</>;
	else if (isNotAuthenticated) return <>{isNotAuthenticated}</>;
	return <>{lazy(() => import('../../pages/presentation/auth/Login'))}</>;
};

export default IsAuth;
