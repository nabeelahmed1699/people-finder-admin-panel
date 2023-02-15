import React,{useState} from 'react';

// ** MUI IMPORTS
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const FileUploader = ({ icon, label, variant, id,setFiles,files }) => {
	const [image,setImage] = useState()
	// console.log("FILEIEIEIE: ",files)
	function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result)
			}
			fileReader.onerror = (err) => {
				reject(err)
			}
		})
	}
	const onChange = async (e) => {
		const file = e.target.files[0]
		setImage(file)
		const base64 = await convertToBase64(file)
		setFiles(base64)
}

	return (
		<>
			<Button variant={variant} component='label' fullWidth startIcon={icon}>
				{label}
				<input
					type='file'
					hidden
					onChange={onChange}
				/>
			</Button>
			{image && <Typography>{ `${image.name} - ${image.type}`}</Typography>}
		</>
	);
};

export default FileUploader;
