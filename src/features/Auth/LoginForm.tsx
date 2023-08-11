import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';
import { setRefreshToken, setRoles, setSelectedRole, setToken, setUser } from '@/redux/authSlice';
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '@/router/appRoutes';
import { validatePhoneNumber } from './helper';
import { PromiseHandler } from '@/utils';

type PropTypes = {
	isLoginToBuyProduct?: boolean;
};

export default function LoginForm(props: PropTypes) {
	const { isLoginToBuyProduct } = props;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loginMutation, { isLoading }] = useLoginMutation();

	const onFinish = async (values: any) => {
		const isPhoneNumberValid = validatePhoneNumber(values?.phone);
		if (!isPhoneNumberValid) {
			message.info('Invalid phone number');
			return false;
		}

		const [snapshot, loginError] = await PromiseHandler(loginMutation(values).unwrap());
		if (snapshot) {
			dispatch(setUser(snapshot?.result));
			dispatch(setToken(snapshot?.accessToken));
			dispatch(setRefreshToken(snapshot?.refreshToken));
			dispatch(setRoles(snapshot?.result?.role));
			dispatch(setSelectedRole(snapshot?.result?.role[0]));
			message.success(snapshot?.message);
			if (isLoginToBuyProduct) {
				navigate(PRIVATE_ROUTE.CHECKOUT);
				return false;
			}
			navigate(PUBLIC_ROUTE.LANDING);
			return false;
		}

		if (loginError) {
			message.error(loginError?.message || 'Something went wrong!');
			return false;
		}

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
				<Button loading={isLoading} block size="large" type="primary" htmlType="submit">
					LOGIN
				</Button>
			</Form.Item>
		</Form>
	);
}
