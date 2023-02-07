import React from 'react';

// ** MUI imports
import Grid from '@mui/material/Grid';

// custom imports
import Post from './components/post';

const Posts = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
			<Grid item xs={12} sm={6} md={4} xl={3}>
				<Post />
			</Grid>
		</Grid>
	);
};

export default Posts;
