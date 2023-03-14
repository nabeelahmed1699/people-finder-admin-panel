import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';

// ** MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
// custom imports
import { missingPostScheme } from 'src/constants/validationSchemas';
import CustomPhoneInput from 'src/components/phoneInput/index';
import FileUploader from 'src/components/fileUploader';

// icons
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MaterialDatePicker from 'src/components/datePicker';


const defaultValues = {
	name: 'Ali hassan',
	fatherName: 'Aslam khan',
	motherName: 'Naveen khan',
	age: 23,
	city: 'Lahore',
	country: 'Pakistan',
	state: 'Punjab',
	street: 'gulon wala chowk',
	dateMissing: moment('2014-08-18T21:11:54'),
	mentalCondition: 'Fine',
	physicalCondition: 'Fine',
	cellNo: '+923244902616',
	description:
	'We have many missing children, in the hope one day somebody will come and took them to their house.',
};

const CreatePostForm = ({
	handleSubmitPost,
	photo,
	setPhoto,
	editPerson,
	isEdit,
}) => {
	const {
		control,
		// setError,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: isEdit ? editPerson : defaultValues,
		mode: 'onBlur',
			resolver: yupResolver(missingPostScheme),
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
							name='dateMissing'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<MaterialDatePicker
									size='small'
									fullWidth
									label='Missing Date'
									placeholder='Missing Date'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.dateMissing)}
								/>
							)}
						/>
						{errors.dateMissing && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.dateMissing.message}
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
				<Grid item xs={6}>
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
				<Grid item xs={6}>
					<FormControl fullWidth sx={{ mb: 1 }}>
						<Controller
							name='state'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange, onBlur } }) => (
								<TextField
									size='small'
									label='State'
									placeholder='State'
									value={value}
									onBlur={onBlur}
									onChange={onChange}
									error={Boolean(errors.state)}
								/>
							)}
						/>
						{errors.state && (
							<FormHelperText sx={{ color: 'error.main' }}>
								{errors.state.message}
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
						label='Add Picture'
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
