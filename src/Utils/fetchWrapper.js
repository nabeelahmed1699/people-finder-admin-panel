// import useAuthentication from '../JWTexpire/JWTexpire';
/**
 * @function getBearerToken
 * @description
 *   Token stored in Local Storage and return a string of Bearer Token
 * */

import { authConfig } from "src/constants/configs/auth";

/**
 * @function fetchWrapper
 * @param {string} arg1 - REST method | url
 * @param {string} [url] - url
 * @param {Object} [body] - body of message
 * @description
 *   Wrapper for the fetch api that provides options defaults and base response code handling.
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const fetchWrapper = async (arg1, url, body, additionalOptions) => {
	// if called with one argument, default to 'GET' method
	const _method = url ? arg1.toUpperCase() : 'GET';
	// if called without method arg, the first
	const _url = url || arg1;

	const options = {
		method: _method,
		headers: {
			Accept: 'application/json',
			'x-auth-token': window.localStorage.getItem(
				authConfig.storageTokenKeyName
			),
			'Content-Type': 'application/json',
		},
		body: body && JSON.stringify(body), // body can be undefined, that's ok
		...additionalOptions,
	};

	return fetch(`${_url}`, options).then(handleResponse);
	//this was shortened because the full URLs are being passed in from
	//Constants/urls.js. Will need configuration when moving to stage
	//return fetch(`${Url}${_url}`,options).then(handleResponse)
};

export const fetchWrapperUpload = async (
	arg1,
	url,
	body,
	additionalOptions
) => {
	// if called with one argument, default to 'GET' method
	const _method = url ? arg1.toUpperCase() : 'GET';
	// if called without method arg, the first
	const _url = url || arg1;
	// get tokenBearer stored in AsyncStorage
	// const tokenBearer = await getBearerToken();

	const options = {
		method: _method,
		mode: 'cors',
		headers: {
			Accept: 'application/json',
			'x-auth-token': window.localStorage.getItem(
				authConfig.storageTokenKeyName
			),
			'Content-Type': body.type,
			'Content-length':`${body.sizex}`
		},
		body: body, // body can be undefined, that's ok
		...additionalOptions,
	};

	return fetch(`${_url}`, options).then(handleResponse);
	//this was shortened because the full URLs are being passed in from
	//Constants/urls.js. Will need configuration when moving to stage
	//return fetch(`${Url}${_url}`,options).then(handleResponse)
};

/**
 * @function handleResponse
 * @param {Object} response - The response object.
 * @description
 *   A handler for the fetch response Object
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const handleResponse = async (response) => {
	// console.log("......response", response);
	if (response.status === 204) {
		return true;
	}

	const res = await response?.json();
	// console.log("......response", res);
	if (response.status === 401) {
		// toast.error("Session has been expired")
		// useAuthentication(res);
	}

	if (response.status === 400) {
		// throw new Error(res.response);
	}

	if (response.status === 403) {
		// throw new Error(res.response);
	}

	if (response.status === 404) {
		// throw new Error(res.response);
	}
	if (response.status === 405) {
		// throw new Error(res.response);
	}
	if (response.status === 409) {
		// throw new Error(res.response);
	}

	if (response.status === 500) {
		// if (response.status === 500 && res.message.includes("Timeout")) {
		const message = 'Timeout: Request failed to complete in time.';
		// throw new Error(message);
	}

	if (
		response.status === 422 &&
		res.message === 'Incorrect password, try again.'
	) {
		// throw new Error(res.response);
	}

	if (response.status < 200 || response.status >= 300) {
		const message = `There has been an error. Response status: ${response.status}`;
		// throw new Error(message);
	}

	return res;
};
