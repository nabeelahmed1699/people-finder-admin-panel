import React, { useEffect, useState } from 'react';

// ** MUI imports
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// custom imports
import PostCard from 'src/features/foundedPeople/components/postcard';
import { useDispatch } from 'react-redux';
import {
	GET_FOUNDED_API_HANDLER,
	POST_FOUNDED_API_HANDLER,
} from 'src/redux/actions/foundedPersonsAction/actions';
import CustomModal from 'src/components/modal';
import CreatePostForm from 'src/features/foundedPeople/createPostForm';

const FoundedPeople = () => {
	const [foundedPeople, setFoundedPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	const [createPost, setCreatePost] = useState(false);
	const [photo, setPhoto] = useState('');

	// **HOOKS
	const dispatch = useDispatch();

	useEffect(() => {
		getFoundedPeopleList();
	}, []);

	async function getFoundedPeopleList() {
		const response = await dispatch(GET_FOUNDED_API_HANDLER());
		setFoundedPeople(response);
		setLoading(false);
	}

	const openCreateForm = () => setCreatePost(true);
	const closeCreateForm = () => setCreatePost(false);

	async function handleSubmitPost(data) {
		console.log({ data });
		const response = await dispatch(
			POST_FOUNDED_API_HANDLER({ ...data, photo })
		);
		if (response.status <= 200 && response >= 299) {
			getFoundedPeopleList();
		}
		closeCreateForm();
	}

	async function handleDelete(_id) {
		console.log({_id})
	}
	return (
		<>
			<Stack alignItems='center'>
				<Typography variant='h4'>Founded People</Typography>
				<Typography paragraph>
					these are the people that are founded by social organizations like
					Edhi, Chhipa etc...
				</Typography>
			</Stack>
			<Stack direction='row' justifyContent='flex-end'>
				<Button variant='contained' onClick={openCreateForm}>
					Create a Post
				</Button>
			</Stack>
			<Grid container spacing={2} sx={{ mt: 1 }}>
				{foundedPeople.map((person) => {
					console.log('msmsmsms',person)
					return (
						<Grid item key={person._id} xs={12} sm={6} md={4} xl={3}>
							<PostCard loading={loading} handleDelete={handleDelete} person={person} />
						</Grid>
					);
				})}
			</Grid>
			<CustomModal
				open={createPost}
				onClose={closeCreateForm}
				title='Create a post'
				subtitle="fill up the information about the person you've founded"
			>
				<CreatePostForm
					photo={photo}
					setPhoto={setPhoto}
					handleSubmitPost={handleSubmitPost}
				/>
			</CustomModal>
		</>
	);
};

export default FoundedPeople;
