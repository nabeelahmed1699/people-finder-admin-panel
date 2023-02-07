import React from 'react';

// ** MUI imports
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

// custom imports
import PostCard from 'src/features/foundedPeople/components/postcard';

const FoundedPeople = () => {
	return (
    <>
      <Stack alignItems='center'>
        <Typography variant='h4'>Founded People</Typography>
        <Typography paragraph>these are the people that are founded by social organizations like Edhi, Chhipa etc...</Typography>
      </Stack>
      <Stack direction='row' justifyContent='flex-end'>
        <Button variant='contained'>Create a Post</Button>
      </Stack>
			<Grid container spacing={2} sx={{mt:1}}>
				{[1, 2, 3, 4, 5, 56, 6, 6, 77, 78, 8, 9].map((item) => {
					return (
						<Grid item key={item} xs={12} sm={6} md={4} xl={3}>
							<PostCard />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default FoundedPeople;
