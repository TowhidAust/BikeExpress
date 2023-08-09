export interface UserModel {
	firstname?: string;
	lastname?: string;
	phone?: string;
	division?: string;
	district?: string;
	address?: string;
	deliveryLocation?: {
		division?: string;
		district?: string;
		address?: string;
	};
}
