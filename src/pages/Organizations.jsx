import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

// ** MUI IMPORTS
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// icons
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// custom imports
import Posts from 'src/features/organizations/posts';
import CustomModal from 'src/components/modal';
import RegisterationForm from 'src/features/organizations/registerationForm';
import {
	GET_ORGANIZATIONS_API_HANDLER,
	REGISTER_ORGANIZATIONS_API_HANDLER,
} from 'src/redux/actions/organizationsAction/actions';
import FileUploader from 'src/components/fileUploader';

const Organizations = () => {
	const dispatch = useDispatch();
	const [registerationModal, setRegisterationModal] = useState(false);
	const [organizations, setOrganizations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [fileUploadModal, setFileUploadModal] = useState(false);

	const openRegisteration = () => setRegisterationModal(true);
	const closeRegisteration = () => setRegisterationModal(false);

	const openFileUploadModal = () => setFileUploadModal(true);
	const closeFileUploadModal = () => setFileUploadModal(false);

	const registerOrganization = async (data) => {
		const response = await dispatch(REGISTER_ORGANIZATIONS_API_HANDLER(data));
		console.log('resws', response);
		if (response.status >= 200 && response.status <= 299) {
			closeRegisteration();
			openFileUploadModal();
			toast.success('organization registered successfully!');
			getOrganizations();
		}
	};

	const getOrganizations = async () => {
		setLoading(true);
		const Data = await dispatch(GET_ORGANIZATIONS_API_HANDLER());
		setOrganizations(Data);
		setLoading(false);
	};
	return (
		<Stack>
			<Button
				sx={{ ml: 'auto', mb: 1 }}
				variant='contained'
				startIcon={<AddOutlinedIcon />}
				onClick={openRegisteration}
			>
				Add new organization
			</Button>
			<Posts
				organizations={organizations}
				getOrganizations={getOrganizations}
				loading={loading}
			/>
			<CustomModal
				title='Add a new organization'
				subtitle='fill the fields below to register a new organization in your database'
				open={registerationModal}
				onClose={closeRegisteration}
			>
				<RegisterationForm registerOrganization={registerOrganization} />
			</CustomModal>
			<CustomModal
				title='Upload files'
				subtitle='upload the files by clicking the buttons below'
				open={fileUploadModal}
				onClose={closeFileUploadModal}
			>
				<Stack sx={{ gap: 2 }}>
					<FileUploader
						icon={<PhotoCameraIcon />}
						label='Profile Pic Upload'
						variant='outlined'
					/>

					<FileUploader
						icon={<AccountCircleOutlinedIcon />}
						label='Cover Photo Upload'
						variant='contained'
					/>
				</Stack>
				<Stack direction='row' justifyContent='flex-end' sx={{ gap: 1, mt: 2 }}>
					<Button
						variant='outlined'
						color='error'
						onClick={closeFileUploadModal}
					>
						cancel
					</Button>
					<Button
						variant='contained'
						color='success'
						onClick={closeFileUploadModal}
					>
						Ok
					</Button>
				</Stack>
			</CustomModal>
		</Stack>
	);
};

export default Organizations;
