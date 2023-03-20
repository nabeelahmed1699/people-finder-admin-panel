import React from 'react';

// ** MUI IMPORTS
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import RegisterForm from 'src/features/register';

const Register = () => {
	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='center'
			// sx={{ minHeight: '110vh' }}
		>
			<Box
				maxWidth='sm'
				sx={{
					border: '1px solid',
					borderColor: 'grey.200',
					borderRadius: 4,
          overflow: 'hidden',
          my:4,
				}}
			>
				<RegisterForm />
			</Box>
		</Stack>
	);
};

export default Register;
