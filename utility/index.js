export * from './constants/AppConstant';
export * from './constants/ImageSource';
export * from './constants/RouteConstant';

export const STATUS_VALUES = {
	ACTIVE: 'active',
	INACTIVE: 'inactive',
};

export const STATUS_LABELS = {
	ACTIVE: 'Active',
	INACTIVE: 'Inactive',
};

export const STATUS_ARRAY = {
	STATUSES: [
		{id: STATUS_VALUES.ACTIVE, title: STATUS_LABELS.ACTIVE},
		{id: STATUS_VALUES.INACTIVE, title: STATUS_LABELS.INACTIVE},
	],
};

export const ROLE_VALUES = {
	NOACCESS: 'noaccess',
	SERVERUSER: 'serveruser',
	ADMIN: 'admin',
};

export const ROLE_LABELS = {
	NOACCESS: 'No Access',
	SERVERUSER: 'Server User',
	ADMIN: 'Administrator',
};

export const ROLE_ARRAY = [
	{id: ROLE_VALUES.NOACCESS, title: ROLE_LABELS.NOACCESS},
	{id: ROLE_VALUES.SERVERUSER, title: ROLE_LABELS.SERVERUSER},
	{id: ROLE_VALUES.ADMIN, title: ROLE_LABELS.ADMIN},
];
