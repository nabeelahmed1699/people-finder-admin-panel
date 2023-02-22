import React from 'react';

// ** MUI IMPORT
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// icons
import CloseIcon from '@mui/icons-material/Close';
import { InputAdornment } from '@mui/material';


const Filters = ({ nameFilter, setNameFilter }) => {
  function handleClear() {
   setNameFilter('') 
  }
	return (
		<Card>
			<CardContent>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<TextField
							label='Filter by name'
							fullWidth
							value={nameFilter}
							onChange={(e) => setNameFilter(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position='start'>
										{nameFilter.length > 0 && (
											<IconButton onClick={handleClear}>
												<CloseIcon />
											</IconButton>
										)}
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					{/* <Grid item xs={6} sm={2}>
						<Button
							variant='outlined'
							fullWidth
							size='large'
							onClick={handleSearch}
						>
							Search
						</Button>
					</Grid> */}
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Filters;
