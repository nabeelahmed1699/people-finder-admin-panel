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



// Founded Posts
export const GET_FOUNDED_API = () => fetchWrapper('GET', urls.FOUNDED_PERSONS);
export const POST_NEW_FOUNDED_API = (body) => fetchWrapper('POST', urls.FOUNDED_PERSONS,body);
export const UPDATE_FOUNDED_API = (_id,body) => fetchWrapper('PATCH', `${urls.FOUNDED_PERSONS}/${_id}`,body);
export const DELETE_FOUNDED_POST = (_id)=> fetchWrapper('DELETE',`${urls.FOUNDED_PERSONS}/${_id}`)
export const RECOVERED_FOUNDED_PERSON_API = (_id)=> fetchWrapper('PUT',`${urls.FOUNDED_PERSONS}/${_id}`)

// Founded Posts
export const GET_MISSING_PEOPLE_API = () => fetchWrapper('GET', urls.MISSING_PERSONS);
export const POST_NEW_MISSING_PERSON_API = (body) => fetchWrapper('POST', urls.MISSING_PERSONS,body);
export const UPDATE_MISSING_PERSON_API = (_id,body) => fetchWrapper('PATCH', `${urls.MISSING_PERSONS}/${_id}`,body);
export const DELETE_MISSING_PERSON_POST = (_id) => fetchWrapper('DELETE', `${urls.MISSING_PERSONS}/${_id}`);
export const RECOVERED_MISSING_PERSON_API = (_id) => fetchWrapper('PUT', `${urls.MISSING_PERSONS}/${_id}`);



// Recovered People
export const GET_RECOVERED_PEOPLE_API = () => fetchWrapper('GET', urls.RECOVERED_PERSONS);
