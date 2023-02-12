import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		setUser(window.localStorage.getItem('user'));
	}, []);
	console.log('user', user);
	return <>{user ? <Outlet /> : <Navigate to='/login' />}</>;
};

export default PrivateRoutes;
