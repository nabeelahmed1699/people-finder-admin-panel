import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

// css
import './index.css';

const CustomPhoneInput = ({ value, onChange, error }) => {
	return (
		<PhoneInput
			fullWidth
			country={'us'}
			value={value}
			onChange={onChange}
			inputStyle={{
				border: error && '1px solid #D14343',
			}}
		/>
	);
};

export default CustomPhoneInput;
