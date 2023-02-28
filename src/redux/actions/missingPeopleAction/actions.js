import * as Services from 'src/services';

export const GET_MISSING_PEOPLE_API_HANDLER = () => async (dispatch) => {
	try {
		let Data = await Services.GET_MISSING_PEOPLE_API();
		return Data;
	} catch (error) {
		return error;
	}
};

export const UPDATE_MISSING_PERSON_API_HANDLER = (_id,body) => async (dispatch) => {
	try {
    let Data = await Services.UPDATE_MISSING_PERSON_API(_id,body);
		return Data;
	} catch (error) {
		return error;
	}
};

export const POST_NEW_MISSING_PERSON_API_HANDLER = (body) => async (dispatch) => {
	try {
    let Data = await Services.POST_NEW_MISSING_PERSON_API(body);
		return Data;
	} catch (error) {
		return error;
	}
};

export const DELETE_MISSING_PERSON_POST_HANDLER = (_id) => async (dispatch) => {
	try {
    let Data = await Services.DELETE_MISSING_PERSON_POST(_id);
		return Data;
	} catch (error) {
		return error;
	}
};
