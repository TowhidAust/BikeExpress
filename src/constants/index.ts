const DIVISIONS = [
	{
		value: 'Dhaka',
		label: 'Dhaka',
	},
	{
		value: 'Mymensingh',
		label: 'Mymensingh',
	},
	{
		value: 'Chittagong',
		label: 'Chittagong',
	},
	{
		value: 'Rajshahi',
		label: 'Rajshahi',
	},
	{
		value: 'Khulna',
		label: 'Khulna',
	},
	{
		value: 'Barisal',
		label: 'Barisal',
	},
	{
		value: 'Sylhet',
		label: 'Sylhet',
	},
	{
		value: 'Rangpur',
		label: 'Rangpur',
	},
];

const DISTRICTS = {
	Barisal: [
		{ value: 'Barguna', label: 'Barguna' },
		{ value: 'Barisal', label: 'Barisal' },
		{ value: 'Bhola', label: 'Bhola' },
		{ value: 'Jhalokati', label: 'Jhalokati' },
		{ value: 'Patuakhali', label: 'Patuakhali' },
		{ value: 'Pirojpur', label: 'Pirojpur' },
	],
	Chittagong: [
		{ value: 'Bandarban', label: 'Bandarban' },
		{ value: 'Brahmanbaria', label: 'Brahmanbaria' },
		{ value: 'Chandpur', label: 'Chandpur' },
		{ value: 'Chittagong', label: 'Chittagong' },
		{ value: 'Comilla', label: 'Comilla' },
		{ value: "Cox's Bazar", label: "Cox's Bazar" },
		{ value: 'Feni', label: 'Feni' },
		{ value: 'Khagrachhari', label: 'Khagrachhari' },
		{ value: 'Lakshmipur', label: 'Lakshmipur' },
		{ value: 'Noakhali', label: 'Noakhali' },
		{ value: 'Rangamati', label: 'Rangamati' },
	],
	Dhaka: [
		{ value: 'Dhaka', label: 'Dhaka' },
		{ value: 'Faridpur', label: 'Faridpur' },
		{ value: 'Gazipur', label: 'Gazipur' },
		{ value: 'Gopalganj', label: 'Gopalganj' },
		{ value: 'Kishoreganj', label: 'Kishoreganj' },
		{ value: 'Madaripur', label: 'Madaripur' },
		{ value: 'Manikganj', label: 'Manikganj' },
		{ value: 'Munshiganj', label: 'Munshiganj' },
		{ value: 'Narayanganj', label: 'Narayanganj' },
		{ value: 'Narsingdi', label: 'Narsingdi' },
		{ value: 'Rajbari', label: 'Rajbari' },
		{ value: 'Shariatpur', label: 'Shariatpur' },
		{ value: 'Tangail', label: 'Tangail' },
	],
	Khulna: [
		{ value: 'Bagerhat', label: 'Bagerhat' },
		{ value: 'Chuadanga', label: 'Chuadanga' },
		{ value: 'Jessore', label: 'Jessore' },
		{ value: 'Jhenaidah', label: 'Jhenaidah' },
		{ value: 'Khulna', label: 'Khulna' },
		{ value: 'Kushtia', label: 'Kushtia' },
		{ value: 'Magura', label: 'Magura' },
		{ value: 'Meherpur', label: 'Meherpur' },
		{ value: 'Narail', label: 'Narail' },
		{ value: 'Satkhira', label: 'Satkhira' },
	],
	Mymensingh: [
		{ value: 'Jamalpur', label: 'Jamalpur' },
		{ value: 'Mymensingh', label: 'Mymensingh' },
		{ value: 'Netrakona', label: 'Netrakona' },
		{ value: 'Sherpur', label: 'Sherpur' },
	],
	Rajshahi: [
		{ value: 'Bogra', label: 'Bogra' },
		{ value: 'Chapainawabganj', label: 'Chapainawabganj' },
		{ value: 'Joypurhat', label: 'Joypurhat' },
		{ value: 'Naogaon', label: 'Naogaon' },
		{ value: 'Natore', label: 'Natore' },
		{ value: 'Pabna', label: 'Pabna' },
		{ value: 'Rajshahi', label: 'Rajshahi' },
		{ value: 'Sirajganj', label: 'Sirajganj' },
	],
	Rangpur: [
		{ value: 'Dinajpur', label: 'Dinajpur' },
		{ value: 'Gaibandha', label: 'Gaibandha' },
		{ value: 'Kurigram', label: 'Kurigram' },
		{ value: 'Lalmonirhat', label: 'Lalmonirhat' },
		{ value: 'Nilphamari', label: 'Nilphamari' },
		{ value: 'Panchagarh', label: 'Panchagarh' },
		{ value: 'Rangpur', label: 'Rangpur' },
		{ value: 'Thakurgaon', label: 'Thakurgaon' },
	],
	Sylhet: [
		{ value: 'Habiganj', label: 'Habiganj' },
		{ value: 'Moulvibazar', label: 'Moulvibazar' },
		{ value: 'Sunamganj', label: 'Sunamganj' },
		{ value: 'Sylhet', label: 'Sylhet' },
	],
};

const BIKELIST = [
	{ value: '101', label: 'SUZUKI GSX-R150 ABS' },
	{ value: '102', label: 'SUZUKI GSX-S150' },
	{ value: '103', label: 'SUZUKI BANDIT 150' },
	{ value: '104', label: 'SUZUKI INTRUDER FI ABS' },
	{ value: '105', label: 'SUZUKI GIXXER FI ABS' },
];

const YEAR_OF_REGISTRATION = [
	{ value: '2023', label: '2023' },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
];

const BIKE_MODEL_YEAR = [
	{ value: '2023', label: '2023' },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
];

const DURATION_OF_REGISTRATION = [
	{ value: 'on-test', label: 'On Test' },
	{ value: '2', label: '2 years' },
	{ value: '10', label: '10 years' },
	{ value: 'expired', label: 'Tax Token Expired' },
];

const ZONE_OF_REGISTRATION = [
	{
		value: 'Dhaka',
		label: 'Dhaka',
	},
	{
		value: 'Mymensingh',
		label: 'Mymensingh',
	},
	{
		value: 'Chittagong',
		label: 'Chittagong',
	},
	{
		value: 'Rajshahi',
		label: 'Rajshahi',
	},
	{
		value: 'Khulna',
		label: 'Khulna',
	},
	{
		value: 'Barisal',
		label: 'Barisal',
	},
	{
		value: 'Sylhet',
		label: 'Sylhet',
	},
	{
		value: 'Rangpur',
		label: 'Rangpur',
	},
	{
		value: 'Other',
		label: 'Other',
	},
];

const OWNERSHIP_STATUS = [
	{ value: '1st Owner', label: '1st Owner' },
	{ value: '2nd Owner', label: '2nd Owner' },
];

export {
	DIVISIONS,
	DISTRICTS,
	BIKELIST,
	YEAR_OF_REGISTRATION,
	DURATION_OF_REGISTRATION,
	BIKE_MODEL_YEAR,
	ZONE_OF_REGISTRATION,
	OWNERSHIP_STATUS,
};
