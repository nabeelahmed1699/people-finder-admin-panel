import { Suspense, } from 'react';
import ToastContainer from "react-hot-toast"

// ** MUI IMPORTS
import { CssBaseline, ThemeProvider } from '@mui/material';

// custom imports
import RouterComponent from 'src/routes';
import { AuthProvider } from './context/AuthContext';
import  OrganizationsProvider from './context/OrganizationContext';
import { theme } from './@core/theme';

function App() {	
	return (
		<AuthProvider>
			<OrganizationsProvider>

			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Suspense fallback={<div>loading...</div>}>
					<ToastContainer/>
					<RouterComponent />
				</Suspense>
			</ThemeProvider>
			</OrganizationsProvider>
		</AuthProvider>
	);
}

export default App;
