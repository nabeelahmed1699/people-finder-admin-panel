import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';

// ** MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// custom imports
import { foundedPostScheme } from 'src/constants/validationSchemas';
import CustomPhoneInput from 'src/components/phoneInput/index';
import FileUploader from 'src/components/fileUploader';

// icons
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import { useOrganizations } from 'src/hooks/useOrganinzations';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import MaterialDatePicker from 'src/components/datePicker';

const defaultValues = {
	name: '',
	fatherName: '',
	motherName: '',
	city: '',
	country: '',
	state: '',
	street: '',
	cellNo: '',
	description:'',
	mentalCondition: '',
	physicalCondition: '',
	dateFound: '',
	age: 23,
	organizationInfo: '',
};
// const defaultValues = {
// 	name: 'Ali hassan',
// 	fatherName: 'Aslam khan',
// 	motherName: 'Naveen khan',
// 	city: 'Lahore',
// 	country: 'Pakistan',
// 	state: 'Punjab',
// 	street: 'gulon wala chowk',
// 	cellNo: '+923244902616',
// 	description:
// 		'We have many missing children, in the hope one day somebody will come and took them to their house.',
// 	mentalCondition: 'Fine',
// 	physicalCondition: 'Fine',
// 	dateFound: moment('2014-08-18T21:11:54'),
// 	age: 23,
// 	organizationInfo: '',
// };

const CreatePostForm = ({
	handleSubmitPost,
	photo,
	setPhoto,
	editPerson,
	isEdit,
}) => {
	const { loading, organizations } = useOrganizations();
	const {
		control,
		// setError,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: isEdit ? editPerson : defaultValues,
		mode: 'onBlur',
		resolver: yupResolver(foundedPostScheme),
	});
	console.log({isEdit,editPerson})
	return (
		<form
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(handleSubmitPost)}
		>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<Controller
							name='organizationInfo'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<>
									<InputLabel id='demo-simple-select-label'>
										Organization
									</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										size='small'
										value={value}
										label='Organization'
										onChange={onChange}
										onBlur={onBlur}
										error={Boolean(errors.organizationInfo)}
									>
										{loading ? (
											<Stack
												justifyContent='center'
												alignItems='center'
												direction='row'
											>
												<CircularProgress />
											</Stack>
										) : (
											organizations.map((or) => {
												return (
													<MenuItem key={or._id} value={or._id}>
														{or.name}
													</MenuItem>
												);
											})
										)}
									</Select>
								</>
							)}
						/>
						{errors.organizationInfo && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.organizationInfo.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12}>
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
							name='fatherName'
							control={control}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
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
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='physicalCondition'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
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
				<Grid item xs={6}>
					<FormControl>
						<Controller
							name='dateFound'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<MaterialDatePicker
									size='small'
									fullWidth
									label='Located Date'
									placeholder='Located Date'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.dateFound)}
								/>
							)}
						/>
						{errors.dateFound && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.dateFound.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='cellNo'
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
									error={Boolean(errors.cellNo)}
								/>
							)}
						/>
						{errors.cellNo && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.cellNo.message}
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
							name='description'
							control={control}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
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
