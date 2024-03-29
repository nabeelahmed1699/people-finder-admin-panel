import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'src/layout/index';

// Pages
import Dashboard from 'src/pages/Dashboard';
import NotFoundPage from 'src/pages/404';
import Login from 'src/pages/Login';
import FoundedPeople from 'src/pages/FoundedPeople';
import MissingPeople from 'src/pages/MissingPeople';
import Organizations from 'src/pages/Organizations';
import RegisterPage from 'src/pages/Register';
import PrivateRoutes from './PrivateRoutes';
import RecoveredPeople from 'src/pages/RecoveredPeople';

const RouterComponent = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route element={<PrivateRoutes/>}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/founded-people' element={<FoundedPeople />} />
					<Route path='/recovered' element={<RecoveredPeople />} />
					<Route path='/missing-people' element={<MissingPeople />} />
					<Route path='/organizations' element={<Organizations />} />
					</Route>
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<RegisterPage/>} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default RouterComponent;
