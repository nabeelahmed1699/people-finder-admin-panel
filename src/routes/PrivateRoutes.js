import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { authConfig } from 'src/constants/configs/auth';
import { useLocalStorage } from 'src/hooks/8-useStorage/useStorage';

const PrivateRoutes = () => {
	const [userDetails] = useLocalStorage(authConfig.userData);

	console.log('userDetails',userDetails)
	return userDetails && userDetails.status === 200 ? (
		<Outlet />
	) : (
		<Navigate to='/login' />
	);
};

export default PrivateRoutes;
