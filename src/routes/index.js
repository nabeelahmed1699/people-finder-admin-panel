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

const RouterComponent = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/founded-people' element={<FoundedPeople />} />
					<Route path='/missing-people' element={<MissingPeople />} />
					<Route path='/organizations' element={<Organizations />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default RouterComponent;
