import * as React from 'react';
import moment from 'moment';

// ** MUI IMPORTS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Table, TableContainer, TableRow, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PostCard({
	loading,
	handleDelete,
	person,
	handleViewMore,
	handleEdit,
}) {


	if (loading) {
		return <CircularProgress />;
	}
	console.log({person})
	return (
		<>
			<Card
				sx={{
					'& .MuiCardHeader-root, & .MuiCardContent-root': {
						padding: 2,
					},
				}}
			>
				<CardHeader
					avatar={
						person.organizationInfo ? (
							<Avatar
								src={person.organizationInfo.photo}
								alt={person.organizationInfo.name}
							/>
						) : (
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								{person.organizationInfo.name.charAt(0)}
							</Avatar>
						)
					}
					title={person.organizationInfo.name}
					subheader={moment(person.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
				/>

				{person.photo && (
					<CardMedia
						component='img'
						height='194'
						image={person.photo}
						alt={person.name}
					/>
				)}
				<CardContent>
					<TableContainer>
						<Table
							sx={{
								'& .MuiTableCell-root': {
									p: 0.5,
								},
							}}
						>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{person.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Age</TableCell>
									<TableCell>{person.age}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Father Name</TableCell>
									<TableCell>{person.fatherName}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Typography variant='body2' color='text.secondary'>
						{person.description}
					</Typography>
					<Stack direction='row' justifyContent='flex-end' sx={{ mt: 2 }}>
						<Button onClick={() => handleViewMore(person)}>View details</Button>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
}
