// ** React Imports
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// ** Axios
import axios from 'axios';

// ** Config
import { authConfig } from '../constants/configs/auth';

// ** Defaults
const defaultProvider = {
	user: null,
	loading: false,
	setUser: () => null,
	setLoading: () => Boolean,
	isInitialized: false,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	setIsInitialized: () => Boolean,
	register: () => Promise.resolve(),
};
const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
	// ** States
	const [user, setUser] = useState(defaultProvider.user);
	const [loading, setLoading] = useState(defaultProvider.loading);
	const [isInitialized, setIsInitialized] = useState(
		defaultProvider.isInitialized
	);

	// ** Hooks
	const navigate = useNavigate();
	// useEffect(() => {
	// 	const initAuth = async () => {
	// 		setIsInitialized(true);
	// 		const storedToken = window.localStorage.getItem(
	// 			authConfig.storageTokenKeyName
	// 		);
	// 		if (storedToken) {
	// 			setLoading(true);
	// 			await axios
	// 				.get(authConfig.meEndpoint, {
	// 					headers: {
	// 						Authorization: storedToken,
	// 					},
	// 				})
	// 				.then(async (response) => {
	// 					setLoading(false);
	// 					setUser({ ...response.data.userData });
	// 				})
	// 				.catch(() => {
	// 					localStorage.removeItem('userData');
	// 					localStorage.removeItem('refreshToken');
	// 					localStorage.removeItem('accessToken');
	// 					setUser(null);
	// 					setLoading(false);
	// 				});
	// 		} else {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	initAuth();
	// }, []);

	const handleLogin = (params, errorCallback) => {
		setLoading(true);
		axios
			.post(authConfig.loginEndpoint, params)
			.then((res) => {
				console.log('USER', res);
				if (res.status >= 200 && res.status < 299) {
					setUser(res.data);
					window.localStorage.setItem(
						authConfig.storageTokenKeyName,
						res.data['x-auth-token']
					);
					window.localStorage.setItem(
						authConfig.userData,
						JSON.stringify(res)
					);
					setLoading(false);
					toast.success('Logged in successfully!')
					navigate('/', { replace: true });
				}
			})
			.catch((err) => {
				setLoading(false);
				if (typeof err.response !== 'undefined') {
					if (err.response.status === 404) {
						toast.error('Invalid email or password!');
					}
					return;
				}
				if (errorCallback) errorCallback(err);
			});
	};

	const handleLogout = () => {
		setUser(null);
		setIsInitialized(false);
		window.localStorage.removeItem('userData');
		window.localStorage.removeItem(authConfig.storageTokenKeyName);
		navigate('/login');
	};

	const handleRegister = (params, errorCallback) => {
		axios
			.post(authConfig.registerEndpoint, params)
			.then((res) => {
				if (res.data.error) {
					if (errorCallback) errorCallback(res.data.error);
				} else {
					handleLogin({ email: params.email, password: params.password });
				}
			})
			.catch((err) => (errorCallback ? errorCallback(err) : null));
	};

	const values = {
		user,
		loading,
		setUser,
		setLoading,
		isInitialized,
		setIsInitialized,
		login: handleLogin,
		logout: handleLogout,
		register: handleRegister,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
