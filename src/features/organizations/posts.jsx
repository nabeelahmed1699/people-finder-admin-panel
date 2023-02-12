import React, { useEffect, useState } from 'react';

// ** MUI imports
import Grid from '@mui/material/Grid';

// custom imports
import Post from './components/post';
import { useDispatch } from 'react-redux';
import {
	DELETE_ORGANIZATIONS_API_HANDLER,
} from 'src/redux/actions/organizationsAction/actions';
import CustomModal from 'src/components/modal';
import { Button, Stack } from '@mui/material';
import { toast } from 'react-hot-toast';

const Posts = ({organizations,getOrganizations,loading}) => {
	const [deleteModal, setDeleteModal] = useState(false);
	const [deleteID, setDeleteID] = useState('');

	// ** HOOKS
	const dispatch = useDispatch();

	useEffect(() => {
		getOrganizations();
	}, []);

	

	const openDeleteModal = (id) => {
		setDeleteModal(true);
		setDeleteID(id);
	};
	const closeDeleteModal = () => {
		setDeleteModal(false);
	};

	const handleDelete = async () => {
		await dispatch(DELETE_ORGANIZATIONS_API_HANDLER(deleteID));
		toast.success("Organization deleted successfully!")
		getOrganizations();
		closeDeleteModal()
	};

	// ** UI
	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<Grid container spacing={2}>
				{organizations.map((organization) => {
					return (
						<Grid key={organization._id} item xs={12} sm={6} md={4} xl={3}>
							<Post handleDelete={openDeleteModal} {...organization} />
						</Grid>
					);
				})}
			</Grid>
			<CustomModal
				open={deleteModal}
				onClose={closeDeleteModal}
				title='Delete organization'
				subtitle='Are you sure you want to delete this organization?'
			>
				<Stack direction='row' justifyContent='flex-end' sx={{ gap: 1 }}>
					<Button color='info' variant='outlined' onClick={closeDeleteModal}>
						Cancel
					</Button>
					<Button color='error' variant='contained' onClick={handleDelete}>
						Delete
					</Button>
				</Stack>
			</CustomModal>
		</>
	);
};

export default Posts;
