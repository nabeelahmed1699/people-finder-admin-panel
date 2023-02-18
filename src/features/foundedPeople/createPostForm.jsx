import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

// custom imports
import { organizationRegisterSchema } from 'src/constants/validationSchemas';
import CustomPhoneInput from 'src/components/phoneInput/index';
import FileUploader from 'src/components/fileUploader';

// icons
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import { useOrganizations } from 'src/hooks/useOrganinzations';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

const defaultValues = {
	name: 'Ali hassan',
	fatherName: 'Aslam khan',
	motherName: 'Naveen khan',
	city: 'Lahore',
	country: 'Pakistan',
	state: 'Punjab',
	street: 'gulon wala chowk',
	cellNo: '+923244902616',
	description:
		'We have many missing children, in the hope one day somebody will come and took them to their house.',
	mentalCondition: 'Fine',
	physicalCondition: 'Fine',
	dateFound: '',
  age: 23,
  organizationInfo:""
};

const CreatePostForm = ({ registerOrganization, photo, setPhoto }) => {
	const { loading, organizations } = useOrganizations();
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
		<form
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(registerOrganization)}
		>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>Organization</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							// value={age}
							label='Organization'
							// onChange={handleChange}
						>
							{loading > 0 ? (
								organizations.map((or) => {
									return (
										<MenuItem key={or._id} value={or._id}>
											{or.name}
										</MenuItem>
									);
								})
							) : (
								<CircularProgress />
							)}
						</Select>
					</FormControl>
				</Grid>
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
							name='fatherName'
							control={control}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Father Name'
									placeholder='Father Name'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.fatherName)}
								/>
							)}
						/>
						{errors.fatherName && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.fatherName.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }} size='small'>
						<Controller
							name='motherName'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Mother Name'
									placeholder='Mother Name'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.motherName)}
								/>
							)}
						/>
						{errors.motherName && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.motherName.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='mentalCondition'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Mental Condition'
									placeholder='Type about his/her mental condition'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.mentalCondition)}
								/>
							)}
						/>
						{errors.mentalCondition && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.mentalCondition.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='physicalCondition'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									size='small'
									label='Physical Condition'
									placeholder='Type about his/her physical condition'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.physicalCondition)}
								/>
							)}
						/>
						{errors.physicalCondition && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.physicalCondition.message}
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
				<Grid item xs={12}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='description'
							control={control}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									autoFocus
									multiline
									minRows={4}
									size='small'
									label='Description'
									placeholder='give a short description about the person'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.description)}
								/>
							)}
						/>
						{errors.description && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.description.message}
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

export default CreatePostForm;
