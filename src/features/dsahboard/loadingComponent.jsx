import React from 'react';
// @mui
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const DashboardLoading = () => {
	return (
		<Grid container spacing={3}>
			{[1, 2, 3, 4].map((item) => {
				return (
					<Grid key={item} item xs={12} sm={6} md={3}>
						<Skeleton animation="wave" variant='rounded' height={250} />
					</Grid>
				);
			})}

			<Grid item xs={12}>
				<Skeleton animation="wave" variant='rounded' height={450} />
			</Grid>
		</Grid>
	);
};

export default DashboardLoading;
