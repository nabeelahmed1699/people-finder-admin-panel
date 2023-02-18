import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import _ from 'lodash';

// ** MUI IMPORTS
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// icons
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// custom imports
import Posts from 'src/features/organizations/posts';
import CustomModal from 'src/components/modal';
import RegisterationForm from 'src/features/organizations/registerationForm';
import { useOrganizations } from 'src/hooks/useOrganinzations';

const Organizations = () => {
	const [registerationModal, setRegisterationModal] = useState(false);
	const [photo, setPhoto] = useState();
	const { loading, organizations, getOrganizations, registerOrganization } = useOrganizations();
	const openRegisteration = () => setRegisterationModal(true);
	const closeRegisteration = () => setRegisterationModal(false);

	function registerOrganizationCalback(data) {
		const branchaddress = _.pick(data, ['city', 'country', 'state', 'street']);
		const body = _.pick(data, [
			'email',
			'BIO',
			'branchCode',
			'branchName',
			'email',
			'name',
			'phoneNo',
		]);
		body.branchaddress = branchaddress
		body.photo = photo
		
		registerOrganization(body,() => {
			closeRegisteration();
			toast.success('organization registered successfully!');
			getOrganizations();
		})
	}

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
				<RegisterationForm
					registerOrganization={registerOrganizationCalback}
					photo={photo}
					setPhoto={setPhoto}
				/>
			</CustomModal>
		</Stack>
	);
};

export default Organizations;
