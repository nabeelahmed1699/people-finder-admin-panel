import * as yup from 'yup';
const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const registerSchema = yup.object().shape({
	firstname: yup.string().required(),
	lastname: yup.string().required(),
	age: yup.number().integer().positive(),
	email: yup.string().email(),
	phoneNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('required'),
	password: yup.string().min(8).max(20),
	// confirmPassword: yup.string.oneOf([yup.ref('password'), null]),
});

export const organizationRegisterSchema = yup.object().shape({
	name: yup.string().required().min(5).max(40),
	branchName: yup.string().required(),
	branchCode: yup.string().required(),
	country: yup.string().required(),
	city: yup.string().required(),
	street: yup.string(),
	email: yup.string().email().required(),
	phoneNo: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Phone number is a required field'),
});


export const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(3).max(20).required(),
});