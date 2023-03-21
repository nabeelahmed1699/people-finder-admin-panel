import * as Services from 'src/services';

export const GET_FOUNDED_API_HANDLER = () => async (dispatch) => {
	try {
		let Data = await Services.GET_FOUNDED_API();
		return Data;
	} catch (error) {
		return error;
	}
};
export const UPDATE_FOUNDED_API_HANDLER = (_id,body) => async (dispatch) => {
	try {
    let Data = await Services.UPDATE_FOUNDED_API(_id,body);
		return Data;
	} catch (error) {
		return error;
	}
};
export const POST_FOUNDED_API_HANDLER = (body) => async (dispatch) => {
	try {
    let Data = await Services.POST_NEW_FOUNDED_API(body);
		return Data;
	} catch (error) {
		return error;
	}
};
export const DELETE_FOUNDED_POST_API_HANDLER = (_id) => async (dispatch) => {
	try {
    let Data = await Services.DELETE_FOUNDED_POST(_id);
		return Data;
	} catch (error) {
		return error;
	}
};
export const RECOVERED_FOUNDED_PERSON_API_HANDLER = (_id) => async (dispatch) => {
	try {
    let Data = await Services.RECOVERED_FOUNDED_PERSON_API(_id);
		return Data;
	} catch (error) {
		return error;
	}
};
