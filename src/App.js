import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ToastContainer from "react-hot-toast"

// ** MUI IMPORTS
import { CssBaseline, ThemeProvider } from '@mui/material';

// custom imports
import { GET_SOCIALPOSTS_API_HANDLER } from './redux/actions/feesActions/action';
import RouterComponent from 'src/routes';
import { AuthProvider } from './context/AuthContext';
import { theme } from './@core/theme';

function App() {
	// const dispatch = useDispatch();
	
	// useEffect(() => {
	// 	getPOsts();
	// }, []);

	// const getPOsts = async () => {
	// 	const Data = await dispatch(GET_SOCIALPOSTS_API_HANDLER());
	// 	console.log('POSTS: ', Data);
	// };
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Suspense fallback={<div>loading...</div>}>
					<ToastContainer/>
					<RouterComponent />
				</Suspense>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
