import * as Services from 'src/services';

export const GET_RECOVERED_PEOPLE_API_HANDLER = () => async (dispatch) => {
	try {
		let Data = await Services.GET_RECOVERED_PEOPLE_API();
		return Data;
	} catch (error) {
		return error;
	}
};

