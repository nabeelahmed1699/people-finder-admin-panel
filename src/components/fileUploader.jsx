import React from 'react';

// ** MUI IMPORTS
import Button from '@mui/material/Button';

const FileUploader = ({ icon, label, variant }) => {
	return (
		<>
			<Button variant={variant} component='label' fullWidth startIcon={icon}>
				{label}
				<input type='file' hidden />
			</Button>
		</>
	);
};

export default FileUploader;
