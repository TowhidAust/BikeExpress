export const validatePhoneNumber = (phoneNumber: string) => {
	const regex = /^(01[3-9]\d{8})$/;
	return regex.test(phoneNumber);
};

export const validatePassword = (password: string) => {
	const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	return regex.test(password);
};
