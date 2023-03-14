import {BASE_URL} from "src/constants/configs/index"
const prefix = 'people-finder'
export const authConfig = {
	loginEndpoint: `${BASE_URL}/auth`,
	registerEndpoint: `${BASE_URL}/user`,
	storageTokenKeyName: `${prefix}access_token`,
	userData:`${prefix}userData`
};
