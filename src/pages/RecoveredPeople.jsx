import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { toast } from 'react-hot-toast';

// ** MUI imports
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// custom imports
import PostCard from 'src/features/foundedPeople/components/postcard';
import {GET_RECOVERED_PEOPLE_API_HANDLER} from "src/redux/actions/recoveredPersonsAction/actions"
import CustomModal from 'src/components/modal';
import Filters from 'src/features/foundedPeople/filters';
import Details from 'src/features/foundedPeople/components/details'
import PostLoading from 'src/components/loadingPost';

const RecoveredPeople = () => {
	const [foundedPeople, setFoundedPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	const [forDetailPerson, setForDetailPerson] = useState({});
	const [detailModal, setDetailModal] = useState(false);
	const [nameFilter, setNameFilter] = useState("")


	const openDetailModal = () => setDetailModal(true);
	const closeDetailModal = () => setDetailModal(false);

	// **HOOKS
	const dispatch = useDispatch();

	useEffect(() => {
		getFoundedPeopleList();
	}, []);

	async function getFoundedPeopleList() {
		try {		
			const response = await dispatch(GET_RECOVERED_PEOPLE_API_HANDLER());
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


	function handleViewMore(person) {
		openDetailModal();
		setForDetailPerson(person);
	}

	const postsList = useMemo(() => {

		if (nameFilter.length === 0) return foundedPeople
		return foundedPeople.filter((person)=>person.query.toLowerCase().includes(nameFilter.toLowerCase()))

	}, [nameFilter, foundedPeople])
	

	return (
		<>
			<Stack alignItems='center'>
				<Typography variant='h4'>Recovered People</Typography>
				<Typography paragraph>
					Reunited and Renewed: Heartwarming Stories of Recovered Loved Ones
				</Typography>
			</Stack>
			<Filters nameFilter={nameFilter} setNameFilter={setNameFilter}/>
			{loading?<PostLoading/>: foundedPeople.length > 0 ? (
				<Grid container spacing={2} sx={{ mt: 1 }}>
					{postsList.map((person) => {
						return (
							<Grid item key={person._id} xs={12} sm={6} md={4} xl={3}>
								<PostCard
									loading={loading}
									person={person}
									handleViewMore={handleViewMore}
								/>
							</Grid>
						);
					})}
				</Grid>
			) : (
				<Stack>
					<Typography variant='h3'>No post yet</Typography>
					<Typography variant='h5' color='text.secondary'>
						There are no recovered person at this time,
					</Typography>
				</Stack>
			)}
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



export default RecoveredPeople;
