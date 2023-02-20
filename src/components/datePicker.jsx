import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function MaterialDatePicker({ size,...props }) {

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
				inputFormat='MM/DD/YYYY'
        renderInput={(params) => <TextField size={size} fullWidth {...params} />}
        {...props}
			/>
		</LocalizationProvider>
	);
}
