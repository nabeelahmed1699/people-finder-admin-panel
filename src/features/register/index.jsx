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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

// ** icons
import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';

// Custom imports
import { registerUser } from 'src/constants/validationSchemas';
import { useAuth } from 'src/hooks/useAuth';
import { toast } from 'react-hot-toast';
import MaterialDatePicker from 'src/components/datePicker';

const defaultValues = {
	password: 'abc',
	email: 'nabeel1699@gmail.com',
};

const RegisterForm = () => {
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
		resolver: yupResolver(registerUser),
	});

	const onSubmit = (data) => {
		console.log(data)
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
						<Typography variant='h4'>Register Here!</Typography>
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
								Create a new user
							</Typography>
						</Stack>
						<form
							noValidate
							autoComplete='off'
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormControl fullWidth sx={{ mb: 4 }}>
								<Controller
									name='name'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<TextField
											size='small'
											autoFocus
											label='Name'
											placeholder='Name'
											value={value}
											onBlur={onBlur}
											onChange={onChange}
											error={Boolean(errors.name)}
										/>
									)}
								/>
								{errors.name && (
									<FormHelperText sx={{ color: 'error.main' }}>
										{errors.name.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl fullWidth sx={{ mb: 4 }}>
								<Controller
									name='email'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<TextField
											size='small'
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
              <FormControl fullWidth sx={{mb:4}}>
								<FormLabel id='gender-selector'>Gender</FormLabel>
								<Controller
									name='gender'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
                    <RadioGroup
											row
											aria-labelledby='gender-selector'
                      name='row-radio-buttons-group'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
										>
											<FormControlLabel
												value='female'
												control={<Radio />}
												label='Female'
											/>
											<FormControlLabel
												value='male'
												control={<Radio />}
												label='Male'
											/>
											<FormControlLabel
												value='other'
												control={<Radio />}
												label='Other'
											/>
										</RadioGroup>
									)}
								/>
							</FormControl>
							<FormControl fullWidth sx={{ mb: 4 }}>
								<Controller
									name='DOB'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<MaterialDatePicker
											size='small'
											fullWidth
											label='Date of birth'
											placeholder='Date of birth'
											value={value}
											onBlur={onBlur}
											onChange={onChange}
											error={Boolean(errors.DOB)}
										/>
									)}
								/>
								{errors.DOB && (
									<FormHelperText sx={{ color: 'error.main' }}>
										{errors.DOB.message}
									</FormHelperText>
								)}
							</FormControl>
							<FormControl fullWidth sx={{ mb: 4 }}>
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
											size='small'
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
							<FormControl fullWidth>
								<InputLabel
									htmlFor='auth-login-v2-confirm-password'
									error={Boolean(errors.confirmPassword)}
								>
									Confirm Password
								</InputLabel>
								<Controller
									name='confirmPassword'
									control={control}
									rules={{ required: true }}
									render={({ field: { value, onChange, onBlur } }) => (
										<OutlinedInput
											size='small'
											value={value}
											onBlur={onBlur}
											label='Confirm Password'
											onChange={onChange}
											id='auth-login-v2-confirm-password'
											error={Boolean(errors.confirmPassword)}
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
								{errors.confirmPassword && (
									<FormHelperText sx={{ color: 'error.main' }} id=''>
										{errors.confirmPassword.message}
									</FormHelperText>
								)}
							</FormControl>
							<Stack direction='row' justifyContent='flex-end' sx={{ mb: 4 }}>
								<Link to='forgetPassword'>
									<MuiLink
										component='span'
										underline='hover'
										sx={{ fontSize: '0.83rem' }}
									>
										Forgot Password?
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
									'Register'
								)}
							</Button>
						</form>
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default RegisterForm;
