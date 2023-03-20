import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//** mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { Link as MuiLink } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

// ** icons
import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';

// Custom imports
import { loginSchema } from 'src/constants/validationSchemas';
import { useAuth } from 'src/hooks/useAuth';
import { toast } from 'react-hot-toast';

const defaultValues = {
	password: 'abc',
	email: 'nabeel1699@gmail.com',
};

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	// ** Hooks
	const auth = useAuth();

	const {
		control,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		mode: 'onBlur',
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (data) => {
		const { email, password } = data;
		auth.login({ email, password }, () => {
			toast.error('Email or Password is invalid');
			setError('password', {
				type: 'manual',
				message: 'Email or Password is invalid',
			});
		});
	};

	return (
		<Card sx={{ borderRadius: '0' }}>
			<CardContent sx={{ height: '100%' }}>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					sx={{ width: '100%', height: '100%' }}
				>
					<Box width={{ xs: '90%', md: '60%' }} textAlign='center'>
						<Typography variant='h4'>Welcome Back!</Typography>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							sx={{ mt: 2 }}
						>
							<Typography
								variant='h6'
								sx={{
									position: 'relative',
									mb: 8,
									'&:after': {
										content: '""',
										position: 'absolute',
										left: '15%',
										bottom: '-10px',
										height: '2px',
										width: '70%',
										borderRadius: '2px',
										mx: 'auto',
										backgroundColor: 'primary.main',
									},
								}}
							>
								Login to continue
							</Typography>
						</Stack>
						<form
							noValidate
							autoComplete='off'
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormControl fullWidth sx={{ mb: 4 }}>
								<Controller
									name='email'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<TextField
											autoFocus
											label='Email'
											placeholder='Email'
											value={value}
											onBlur={onBlur}
											onChange={onChange}
											error={Boolean(errors.email)}
										/>
									)}
								/>
								{errors.email && (
									<FormHelperText sx={{ color: 'error.main' }}>
										{errors.email.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl fullWidth>
								<InputLabel
									htmlFor='auth-login-v2-password'
									error={Boolean(errors.password)}
								>
									Password
								</InputLabel>
								<Controller
									name='password'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<OutlinedInput
											value={value}
											onBlur={onBlur}
											label='Password'
											onChange={onChange}
											id='auth-login-v2-password'
											error={Boolean(errors.password)}
											type={showPassword ? 'text' : 'password'}
											endAdornment={
												<InputAdornment position='end'>
													<IconButton
														edge='end'
														onMouseDown={(e) => e.preventDefault()}
														onClick={() => setShowPassword(!showPassword)}
													>
														{showPassword ? <EyeOutline /> : <EyeOffOutline />}
													</IconButton>
												</InputAdornment>
											}
										/>
									)}
								/>
								{errors.password && (
									<FormHelperText sx={{ color: 'error.main' }} id=''>
										{errors.password.message}
									</FormHelperText>
								)}
							</FormControl>
							<Stack direction='row' justifyContent='flex-end' sx={{ mb: 4 }}>
								<Link to='/register'>
									<MuiLink
										component='span'
										underline='hover'
										sx={{ fontSize: '0.83rem' }}
									>
										Register yourself!
									</MuiLink>
								</Link>
							</Stack>
							<Button
								fullWidth
								size='large'
								type='submit'
								variant='contained'
								disabled={auth.loading}
								sx={{ marginBottom: 7 }}
							>
								{auth.loading ? (
									<CircularProgress size={29} color='dark' />
								) : (
									'LOGIN'
								)}
							</Button>
						</form>
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default LoginForm;
