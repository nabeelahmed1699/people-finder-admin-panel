import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** MUI IMPORTS
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';

// custom imports
import { organizationRegisterSchema } from 'src/constants/validationSchemas';
import CustomPhoneInput from 'src/components/phoneInput/index';

const defaultValues = {
	name: '',
	branchName: '',
	branchCode: '',
	city: '',
	state: '',
	street: '',
	email: '',
};

const RegisterationForm = () => {
	const onSubmit = (data) => {
		console.log(data);
	};
	const {
		control,
		// setError,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		mode: 'onBlur',
		resolver: yupResolver(organizationRegisterSchema),
	});

	return (
		<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }} size='small'>
						<Controller
							name='name'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
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
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }} size='small'>
						<Controller
							name='email'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
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
        </Grid>
        <Grid item xs={12}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='phoneNo'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<CustomPhoneInput
									autoFocus
									size='small'
									label='Phone no'
									placeholder='Phone no'
									value={value}
									onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phoneNo)}
								/>
							)}
						/>
						{errors.phoneNo && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.phoneNo.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }} size='small'>
						<Controller
							name='branchName'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Branch Name'
									placeholder='Branch Name'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.branchName)}
								/>
							)}
						/>
						{errors.branchName && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.branchName.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='branchCode'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Branch Code'
									placeholder='Branch Code'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.branchCode)}
								/>
							)}
						/>
						{errors.branchCode && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.branchCode.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='country'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Country'
									placeholder='Country'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.country)}
								/>
							)}
						/>
						{errors.country && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.country.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='city'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='City'
									placeholder='City'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.city)}
								/>
							)}
						/>
						{errors.city && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.city.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='street'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Street'
									placeholder='Street'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.street)}
								/>
							)}
						/>
						{errors.street && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.street.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
			<Button variant='contained' type='submit' fullWidth>
				Submit
			</Button>
		</form>
	);
};

export default RegisterationForm;
