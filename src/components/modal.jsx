import React from 'react';

// ** MUI IMPORTS
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// icnos
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const CustomModal = ({
	open,
	onClose,
	maxWidth = 'sm',
	title,
	children,
	subtitle,
}) => {
	const style = {
		position: 'relative',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
		width: '100%',
		maxWidth: maxWidth,
		backgroundColor: 'background.paper',
		p: 2,
		pt: 1,
    borderRadius: 1,
    maxHeight:"80vh",
    overflow:'auto'
	};
	return (
		<Modal open={open}>
			<Box sx={style}>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Box></Box>
					<Typography
						component='h3'
						variant='h5'
						fontWeight={700}
						letterSpacing='1px'
					>
						{title}
					</Typography>
					<IconButton onClick={onClose}>
						<CloseOutlinedIcon />
					</IconButton>
				</Stack>
				{subtitle && (
					<Stack direction='row' justifyContent='center' sx={{ width: '100%' }}>
						<Typography variant='caption' color='text.secondary'>
							{subtitle}
						</Typography>
					</Stack>
				)}
				<Box sx={{mt:4}}>{children}</Box>
			</Box>
		</Modal>
	);
};

export default CustomModal;
