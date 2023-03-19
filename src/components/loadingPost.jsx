import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function PostLoading() {
	return (
		<Grid container spacing={2} sx={{ mt: 1 }}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16].map((card) => {
				return (
					<Grid item xs={12} sm={6} md={4} xl={3}>
						<Box width="100%" border={1} borderColor='action.disabled' borderRadius={1} p={2}>
							<LoadingCard />
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
}

function LoadingCard() {
	return (
		<Stack spacing={1} width='100%'>
			<Stack direction='row' sx={{ gap: 2 }}>
				<Skeleton variant='circular' width={40} height={40} />
				<Box width='100%'>
					<Skeleton variant='text' width='100%' sx={{ fontSize: '1rem' }} />
					<Skeleton variant='text' width='100%' sx={{ fontSize: '0.5rem' }} />
				</Box>
			</Stack>

			<Skeleton variant='rectangular' width='100%' height={260} />
			<Stack width='100%'>
				<Stack
					direction='row'
					justifyContent='space-between'
					width='100%'
					sx={{ mt: 2 }}
				>
					<Skeleton variant='text' width='10%' sx={{ fontSize: '0.5rem' }} />
					<Skeleton variant='text' width='20%' sx={{ fontSize: '0.5rem' }} />
				</Stack>
				<Stack
					direction='row'
					justifyContent='space-between'
					width='100%'
					sx={{ mt: 2 }}
				>
					<Skeleton variant='text' width='10%' sx={{ fontSize: '0.5rem' }} />
					<Skeleton variant='text' width='20%' sx={{ fontSize: '0.5rem' }} />
				</Stack>
				<Stack
					direction='row'
					justifyContent='space-between'
					width='100%'
					sx={{ mt: 2 }}
				>
					<Skeleton variant='text' width='10%' sx={{ fontSize: '0.5rem' }} />
					<Skeleton variant='text' width='20%' sx={{ fontSize: '0.5rem' }} />
				</Stack>
				<Stack
					direction='row'
					justifyContent='space-between'
					width='100%'
					sx={{ mt: 2 }}
				>
					<Skeleton variant='text' width='10%' sx={{ fontSize: '0.5rem' }} />
					<Skeleton variant='text' width='20%' sx={{ fontSize: '0.5rem' }} />
				</Stack>
			</Stack>
		</Stack>
	);
}
