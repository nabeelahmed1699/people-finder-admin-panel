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
	DELETE_MISSING_PERSON_POST_HANDLER,
	GET_MISSING_PEOPLE_API_HANDLER,
	POST_NEW_MISSING_PERSON_API_HANDLER,
	UPDATE_MISSING_PERSON_API_HANDLER,
} from 'src/redux/actions/missingPeopleAction/actions';

import CustomModal from 'src/components/modal';
import CreatePostForm from 'src/features/missingPerson/createPostForm';
import Filters from 'src/features/missingPerson/filters';
import Details from 'src/features/missingPerson/components/details'

const MissingPeople = () => {
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
			const response = await dispatch(GET_MISSING_PEOPLE_API_HANDLER());
			if (response.status >= 200 && response.status <= 299) {
				const queriedablePeople = response.people.map(person => {
					const { name, age, fatherName, motherName } = person
					const {street,city,country} = person.address
					return {...person,query:`${name}${age}${fatherName}${motherName}${street}${city}${country}`}
				})
				setFoundedPeople(queriedablePeople);
				setLoading(false);
				
			}
		} catch (error) {
			toast.error('Something went wrong!')
		}
	}

	async function handleSubmitPost(data) {
		setLoading(true)
		const address = {
			city: data.city,
			state: data.state,
			street: data.street,
			country: data.country,
		};
		const body = _.pick(data, [
			'name',
			'fatherName',
			'motherName',
			'age',
			'dateFound',
			'physicalCondition',
			'mentalCondition',
			'cellNo',
			'description',
			'organizationInfo',
		]);
		body.address = address;

		if (isEdit) {
			const response = await dispatch(UPDATE_MISSING_PERSON_API_HANDLER(forDetailPerson._id,{ ...body, photo }))
			if (response.status >= 200 && response.status <= 299) {
				getFoundedPeopleList();
			}
			closeCreateForm();
			setLoading(false)
			return
		}

		const response = await dispatch(
			POST_NEW_MISSING_PERSON_API_HANDLER({ ...body, photo })
		);

		if (response.status >= 200 && response.status <= 299) {
			getFoundedPeopleList();
		}
		closeCreateForm();
	}

	async function handleDelete(_id) {
		const response = await dispatch(DELETE_MISSING_PERSON_POST_HANDLER(_id));
		if (response.status >= 200 && response.status <= 299) {
			getFoundedPeopleList();
			toast.success('Post deleted successfully!');
		}
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
				<Typography variant='h4'>Missing People</Typography>
				<Typography paragraph>
					These are people who are missing from home and separated from their loved ones.
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
						Post something to show in the Missing people section.
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



export default MissingPeople;
