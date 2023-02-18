import { useContext } from 'react';
import { OrganizationsContext } from '../context/OrganizationContext';

export const useOrganizations = () => useContext(OrganizationsContext);
