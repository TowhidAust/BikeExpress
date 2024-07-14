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
	BIKE_SERVICE_CENTERS: '/bike-service/service-centers',

	// product pages by category
	HELMET: '/categories/helmet',
	HELMET_DETAILS: '/categories/helmet/:id',
	HELMET_ACCESSORIES: '/categories/helmet/helmet-accessories',
	HELMET_ACCESSORIES_DETAILS: '/categories/helmet/helmet-accessories/:id',
	ENGINE_OIL: '/categories/engine-oil',
	ENGINE_OIL_DETAILS: '/categories/engine-oil/:id',
	SECURITY_LOCK: '/categories/security-lock',
	SECURITY_LOCK_DETAILS: '/categories/security-lock/:id',
};

export const PRIVATE_ROUTE = {
	HOME: '/admin/home',
	BOOKINGS: '/admin/bookings',

	USER_DETAILS: '/user/details',
	CHECKOUT: '/checkout',
	ORDER_SUCCESS: '/order-succes',

	// admins
	DASHBOARD: '/admin/dashboard',
	PRODUCT_LISTING: '/admin/product-listing',
};
