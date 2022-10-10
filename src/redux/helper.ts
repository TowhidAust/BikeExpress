import { message } from 'antd';

export const globalErrorHandling = (action: any) => {
	const responseData = action?.payload?.data;
	if (!responseData) {
		return message.error('Something went wrong!');
	}

	const { success, code, details, message: resMessage } = responseData;
	if (!success && code === 'field_error') {
		// eslint-disable-next-line no-restricted-syntax, guard-for-in
		for (const i in details) {
			const messageArr = details[i];
			// eslint-disable-next-line no-restricted-syntax, guard-for-in
			for (const j in messageArr) {
				message.warn(`${i}: ${messageArr[j]}`);
			}
		}

		return false;
	}

	if (!success && code === 'non_field_error') {
		return message.warn(details.message || resMessage);
	}

	return message.error('Something went wrong!');
};
