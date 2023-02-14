import {BASE_URL} from "src/constants/configs/index"

export const authConfig = {
	loginEndpoint: `${BASE_URL}/auth`,
	registerEndpoint: `${BASE_URL}/user`,
	storageTokenKeyName: 'access_token',
	userData:'userData'
};
