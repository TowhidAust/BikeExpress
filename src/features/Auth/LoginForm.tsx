import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';
import {
	setRoles,
	setSelectedRole,
	setToken,
	setUser,
} from '@/redux/authSlice';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { validatePhoneNumber } from './helper';

export default function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loginMutation, { isLoading }] = useLoginMutation();

	const onFinish = (values: any) => {
		const isPhoneNumberValid = validatePhoneNumber(values?.phone);
		if (!isPhoneNumberValid) {
			message.info('Invalid phone number');
			return false;
		}

		loginMutation(values)
			.unwrap()
			.then((data) => {
				if (data) {
					dispatch(setUser(data?.result));
					dispatch(setToken(data?.token));
					dispatch(setRoles(data?.result?.role));
					dispatch(setSelectedRole(data?.result?.role[0]));
					message.success(data?.message);
					navigate(PUBLIC_ROUTE.LANDING);
				}
			})
			.catch((err) => {
				if (err?.message) message.error(err?.message);
			});

		return false;
	};

	return (
		<Form
			style={{ padding: '50px 40px' }}
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			size="large"
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			autoComplete="off"
			layout="vertical"
		>
			<Form.Item
				name="phone"
				rules={[
					{
						required: true,
						message: 'Please input your phone number! eg: 017XXXXYYYY',
					},

					{
						message: 'Phone number is not valid! (eg: 017XXXXYYYY)',
						validator: (_, value) => {
							const isPhoneNumberValid = validatePhoneNumber(value);
							if (isPhoneNumberValid) {
								return Promise.resolve();
							}
							return Promise.reject(new Error('Phone number is not valid'));
						},
						validateTrigger: 'onSubmit', // for not showing the error message on type
					},
				]}
			>
				<Input placeholder="Phone (eg: 017XXXXYYYY)" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input.Password placeholder="Please enter your password" />
			</Form.Item>

			<Form.Item>
				<Button
					loading={isLoading}
					block
					size="large"
					type="primary"
					htmlType="submit"
				>
					LOGIN
				</Button>
			</Form.Item>
		</Form>
	);
}
