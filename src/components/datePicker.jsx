import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialDatePicker({ size, fullWidth, ...props }) {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			sx={{ '&.MuiFormControl-root ': { width: '100%' } }}
		>
			<DesktopDatePicker
				fullWidth
				inputFormat='MM/DD/YYYY'
				renderInput={(params) => (
					<TextField size={size} {...params} sx={{ width: '100%' }} />
				)}
				{...props}
			/>
		</LocalizationProvider>
	);
}
