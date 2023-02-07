import React, { useState } from 'react';

// ** MUI IMPORTS
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// icons
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// custom imports
import Posts from 'src/features/organizations/posts';
import CustomModal from 'src/components/modal';
import RegisterationForm from 'src/features/organizations/registerationForm';

const Organizations = () => {
	const [registerationModal, setRegisterationModal] = useState();

	const openRegisteration = () => setRegisterationModal(true);
	const closeRegisteration = () => setRegisterationModal(false);

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
			<Posts />
			<CustomModal
				title='Add a new organization'
				subtitle='fill the fields below to register a new organization in your database'
				open={registerationModal}
				onClose={closeRegisteration}
			>
				<RegisterationForm />
			</CustomModal>
		</Stack>
	);
};

export default Organizations;
