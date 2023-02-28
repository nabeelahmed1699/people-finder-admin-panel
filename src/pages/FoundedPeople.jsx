import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { toast } from 'react-hot-toast';

// ** MUI imports
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// custom imports
import PostCard from 'src/features/foundedPeople/components/postcard';
import {
	DELETE_FOUNDED_POST_API_HANDLER,
	GET_FOUNDED_API_HANDLER,
	POST_FOUNDED_API_HANDLER,
	UPDATE_FOUNDED_API_HANDLER,
} from 'src/redux/actions/foundedPersonsAction/actions';
import CustomModal from 'src/components/modal';
import CreatePostForm from 'src/features/foundedPeople/createPostForm';
import Filters from 'src/features/foundedPeople/filters';
import Details from 'src/features/foundedPeople/components/details'

const FoundedPeople = () => {
	const [foundedPeople, setFoundedPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	const [createPost, setCreatePost] = useState(false);
	const [photo, setPhoto] = useState('');
	const [forDetailPerson, setForDetailPerson] = useState({});
	const [detailModal, setDetailModal] = useState(false);
	const [nameFilter, setNameFilter] = useState("")
	const [isEdit,setIsEdit] = useState(false)


	const openCreateForm = () => setCreatePost(true);
	const closeCreateForm = () => {setCreatePost(false);setIsEdit(false)}

	const openDetailModal = () => setDetailModal(true);
	const closeDetailModal = () => setDetailModal(false);

	// **HOOKS
	const dispatch = useDispatch();

	useEffect(() => {
		getFoundedPeopleList();
	}, []);

	async function getFoundedPeopleList() {
		try {		
			const response = await dispatch(GET_FOUNDED_API_HANDLER());
			if (response.status >= 200 && response.status <= 299) {
				const queriedablePeople = response.people.map(person => {
					const { name, age, fatherName, motherName,street,city,country } = person
					return {...person,query:`${name}${age}${fatherName}${motherName}${street}${city}${country}`}
				})
				setFoundedPeople(queriedablePeople);
				setLoading(false);
				
			}
		} catch (error) {
			toast.error('Something went wrong!')
		}
	}
	useEffect(() => {
	console.log(foundedPeople)
},[foundedPeople])
	async function handleSubmitPost(data) {
		console.log({data})
		setLoading(true)
		if (isEdit) {
			const response = await dispatch(UPDATE_FOUNDED_API_HANDLER(forDetailPerson._id,{ ...data, photo }))
			if (response.status >= 200 && response.status <= 299) {
				getFoundedPeopleList();
			}
			closeCreateForm();
			setLoading(false)
			return
		}

		const response = await dispatch(
			POST_FOUNDED_API_HANDLER({ ...data, photo })
		);

		if (response.status >= 200 && response.status <= 299) {
			getFoundedPeopleList();
		}
		closeCreateForm();
	}

	async function handleDelete(_id) {
		const response = await dispatch(DELETE_FOUNDED_POST_API_HANDLER(_id));
		getFoundedPeopleList();
		toast.success('Post deleted successfully!');
	}

	function handleViewMore(person) {
		openDetailModal();
		setForDetailPerson(person);
	}

	const postsList = useMemo(() => {

		if (nameFilter.length === 0) return foundedPeople
		return foundedPeople.filter((person)=>person.query.toLowerCase().includes(nameFilter.toLowerCase()))

	}, [nameFilter, foundedPeople])
	
	function handleEdit(person) {
		setForDetailPerson(person);
		openCreateForm()
		setIsEdit(true)
	}

	return (
		<>
			<Stack direction='row' justifyContent='flex-end'>
				<Button variant='contained' onClick={openCreateForm}>
					Create a Post
				</Button>
			</Stack>
			<Stack alignItems='center'>
				<Typography variant='h4'>Founded People</Typography>
				<Typography paragraph>
					these are the people that are founded by social organizations like
					Edhi, Chhipa etc...
				</Typography>
			</Stack>
			<Filters nameFilter={nameFilter} setNameFilter={setNameFilter}/>
			{foundedPeople.length > 0 ? (
				<Grid container spacing={2} sx={{ mt: 1 }}>
					{postsList.map((person) => {
						return (
							<Grid item key={person._id} xs={12} sm={6} md={4} xl={3}>
								<PostCard
									loading={loading}
									handleDelete={handleDelete}
									handleEdit = {handleEdit}
									person={person}
									handleViewMore={handleViewMore}
								/>
							</Grid>
						);
					})}
				</Grid>
			) : (
				<Stack>
					<Typography variant='h3'>No any post</Typography>
					<Typography variant='h5' color='text.secondary'>
						Post something to show in the founded post section.
					</Typography>
				</Stack>
			)}
			<CustomModal
				open={createPost}
				onClose={() => { closeCreateForm(); setIsEdit()}}
				title='Create a post'
				subtitle="fill up the information about the person you've founded"
			>
				<CreatePostForm
					photo={photo}
					setPhoto={setPhoto}
					handleSubmitPost={handleSubmitPost}
					editPerson={forDetailPerson}
					isEdit={isEdit}
				/>
			</CustomModal>
			{!_.isEmpty(forDetailPerson) && (
				<CustomModal
					title={forDetailPerson.organizationInfo.name}
					subtitle={moment(forDetailPerson.createdAt).format(
						'MMMM Do YYYY, h:mm:ss a'
					)}
					open={detailModal}
					onClose={closeDetailModal}
				>
					<Details person={forDetailPerson} />
				</CustomModal>
			)}
		</>
	);
};



export default FoundedPeople;
