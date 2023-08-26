export const PUBLIC_ROUTE = {
	LANDING: '/',
	SIGNUP: '/signup',
	USED_BIKES: '/category/used-bikes',
	USED_BIKE_DETAILS: '/category/used-bikes/details',
	USED_BIKE_DETAILS_ID: '/category/used-bikes/details/:id',
	SELL_BIKE_PAGE: '/sell-bike',
	BLOG: '/blog',
	FAQ: '/faq',
	BIKE_SERVICE: '/bike-service',

	// product pages by category
	HELMET: '/categories/helmet',
	HELMET_DETAILS: '/categories/helmet/:id',
	ENGINE_OIL: '/categories/engine-oil',
	ENGINE_OIL_DETAILS: '/categories/engine-oil/:id',
};

export const PRIVATE_ROUTE = {
	HOME: '/admin/home',
	DASHBOARD: '/admin/dashboard',
	BOOKINGS: '/admin/bookings',

	USER_DETAILS: '/user/details',
	CHECKOUT: '/checkout',
	ORDER_SUCCESS: '/order-succes',
};
