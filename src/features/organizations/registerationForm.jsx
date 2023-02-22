import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';


// custom imports
import { organizationRegisterSchema } from 'src/constants/validationSchemas';
import CustomPhoneInput from 'src/components/phoneInput/index';
import FileUploader from 'src/components/fileUploader';

// icons
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const defaultValues = {
	name: 'Sahara Foundation',
	branchName: 'Mughal pura',
	branchCode: '287FE2D',
	city: 'Lahore',
	country: 'Pakistan',
	state: 'Punjab',
	street: 'gulon wala chowk',
	email: 'sahara@pk.com',
	phoneNo: '+923244902616',
	BIO: 'We have many missing children, in the hope one day somebody will come and took them to their house.',
};

const RegisterationForm = ({ registerOrganization,photo,setPhoto }) => {
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
	// function onFileChange() 
	return (
		<form
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(registerOrganization)}
		>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }} size='small'>
						<Controller
							name='name'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									
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
				<Grid item xs={12}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='BIO'
							control={control}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									
									multiline
									minRows={4}
									size='small'
									label='Bio'
									placeholder='Bio'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.BIO)}
								/>
							)}
						/>
						{errors.BIO && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.BIO.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item>
				<FileUploader
						icon={<PhotoCameraIcon />}
						label='Profile Pic Upload'
						variant='outlined'
						files={photo}
						setFiles={setPhoto}
					/>
				</Grid>
			</Grid>
			<Button variant='contained' type='submit' fullWidth sx={{ mt: 2 }}>
				Submit
			</Button>
		</form>
	);
};

export default RegisterationForm;
