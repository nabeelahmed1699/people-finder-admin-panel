import { fetchWrapper, fetchWrapperUpload } from '../Utils/fetchWrapper';
import urls from '../constants/configs/routApis';

// Posts
export const GET_SOCIALPOSTS_API = () => fetchWrapper('GET', urls.SOCIAL_POSTS);
export const POST_SOCIALPOSTS_API = (body) => fetchWrapper('POST', urls.SOCIAL_POSTS, body);
export const DELETE_SOCIALPOSTS_API = (body) => fetchWrapper('DELETE', urls.SOCIAL_POSTS, body);

// ORGANIZATIONS
export const GET_ORGANIZATIONS_API = () => fetchWrapper('GET', urls.ORGANIZATIONS);
export const REGISTER_ORGANIZATIONS_API = (body) => fetchWrapper('POST', urls.ORGANIZATIONS, body);
export const Delete_ORGANIZATIONS_API = (_id) => fetchWrapper('DELETE', `${urls.ORGANIZATIONS}/${_id}`);

