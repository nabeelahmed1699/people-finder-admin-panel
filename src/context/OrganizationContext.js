// ** React Imports
import { createContext, useEffect, useState } from 'react';

// ** Config
import { connect, useDispatch } from 'react-redux';
import { GET_ORGANIZATIONS_API_HANDLER, REGISTER_ORGANIZATIONS_API_HANDLER } from 'src/redux/actions/organizationsAction/actions';

// ** Defaults
const defaultProvider = {
	organizations: null,
	loading: true,
	setOrganizations: () => null,
	setLoading: () => Boolean,
	getOrganizations: () => null,
	registerOrganization:()=>null
};

export const OrganizationsContext = createContext(defaultProvider);

const OrganizationsProvider = ({ children, ORGANIZATIONS }) => {
	// ** States
	const [organizations, setOrganizations] = useState(
		defaultProvider.organizations
	);
	const [loading, setLoading] = useState(defaultProvider.loading);

	// ** Hooks
	const dispatch = useDispatch();
	useEffect(() => {
		if (ORGANIZATIONS.length > 0) {
			setOrganizations(ORGANIZATIONS);
			return;
		}
		getOrganizations();
	}, []);

	const getOrganizations = async () => {
		setLoading(true);
		const Data = await dispatch(GET_ORGANIZATIONS_API_HANDLER());
		setOrganizations(Data);
		setLoading(false);
	};

	const registerOrganization = async (data,callback) => {
		const response = await dispatch(
			REGISTER_ORGANIZATIONS_API_HANDLER(data)
		);
		console.log('resws', response);
		if (response.status >= 200 && response.status <= 299) {
			callback()
		}
	};


	const values = {
		organizations,
		loading,
		setOrganizations,
		setLoading,
		getOrganizations,registerOrganization
	};

	return (
		<OrganizationsContext.Provider value={values}>
			{children}
		</OrganizationsContext.Provider>
	);
};

function mapStatesToProps(store) {
	const { ORGANIZATIONS } = store;
	return { ORGANIZATIONS };
}

export default connect(mapStatesToProps)(OrganizationsProvider);
