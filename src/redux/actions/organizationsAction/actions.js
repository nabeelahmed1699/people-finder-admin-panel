import * as Services from 'src/services';

export const GET_ORGANIZATIONS_API_HANDLER = () => async (dispatch) => {
	try {
    let Data = await Services.GET_ORGANIZATIONS_API();
		return Data;
	} catch (error) {
		return error;
	}
};
export const DELETE_ORGANIZATIONS_API_HANDLER = (_id) => async (dispatch) => {
	try {
    let Data = await Services.Delete_ORGANIZATIONS_API(_id);
		return Data;
	} catch (error) {
		return error;
	}
};
export const REGISTER_ORGANIZATIONS_API_HANDLER = (body) => async (dispatch) => {
	try {
    let Data = await Services.REGISTER_ORGANIZATIONS_API(body);
		return Data;
	} catch (error) {
		return error;
	}
};

