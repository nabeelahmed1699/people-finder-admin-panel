import {BASE_URL} from "src/constants/configs/index"

export const authConfig = {
	meEndpoint: '/auth/me',
	loginEndpoint: `${BASE_URL}/auth`,
	registerEndpoint: '/jwt/register',
	storageTokenKeyName: 'access_token',
};
