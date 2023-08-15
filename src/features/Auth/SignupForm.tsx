import { Button, Form, Input, message, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from './api';
import { setRoles, setSelectedRole, setToken, setUser } from '@/redux/authSlice';
import { validatePassword, validatePhoneNumber } from './helper';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import { BlackButtonContainer } from '@/styles/styled/BlackButtonContainer';

export default function SignupForm() {
	const dispatch = useDispatch();
	const [signupMutation, { isLoading }] = useSignupMutation();
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		values.role = [values.role]; // because role should be an array
		signupMutation(values)
			.unwrap()
			.then((snapshot) => {
				dispatch(setUser(snapshot?.result));
				dispatch(setToken(snapshot?.token));
				dispatch(setRoles(snapshot?.result?.role));
				dispatch(setSelectedRole(snapshot?.result?.role[0]));
				message.success(snapshot?.message);
				navigate(PUBLIC_ROUTE.LANDING);
			})
			.catch((err) => {
				if (err?.message) message.error(err?.message);
			});
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
						message: 'Please enter your phone number!',
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
				<Input placeholder="Please enter your phone number" />
			</Form.Item>

			<Form.Item
				name="firstname"
				rules={[
					{
						required: true,
						message: 'Please enter your first name!',
					},
				]}
			>
				<Input placeholder="Please enter your first name" />
			</Form.Item>

			<Form.Item
				name="lastname"
				rules={[
					{
						required: true,
						message: 'Please enter your last name!',
					},
				]}
			>
				<Input placeholder="Please enter your last name" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Enter your password!',
					},
					{
						message: 'Minimum eight characters, at least one letter, one number and one special character:',
						validator: (_, value) => {
							const isPasswordValid = validatePassword(value);
							if (isPasswordValid) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error('Minimum eight characters, at least one letter, one number and one special character:'),
							);
						},
					},
				]}
			>
				<Input.Password placeholder="Please enter your password" />
			</Form.Item>

			<Form.Item
				name="confirmPassword"
				rules={[
					{
						required: true,
						message: 'Confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error('The two passwords that you entered do not match!'));
						},
					}),
				]}
			>
				<Input.Password placeholder="Please Confirm your password" />
			</Form.Item>

			<Form.Item
				name="role"
				rules={[
					{
						required: true,
						message: 'Select user type!',
					},
				]}
			>
				<Select
					placeholder="Please select user type"
					// defaultValue="BUYER"
					size="large"
					// onChange={handleChange}
					options={[
						{
							value: 'BUYER',
							label: 'I WANT TO BUY FROM BIKEHUB',
						},
						{
							value: 'INDIVIDUAL_SELLER',
							label: 'I WANT TO SELL INDIVIDUALLY',
						},
						{
							value: 'SELLER',
							label: 'I WANT TO SELL AS A SHOP OWNER',
						},
					]}
				/>
			</Form.Item>

			<Form.Item>
				<BlackButtonContainer>
					<Button loading={isLoading} block size="large" type="primary" htmlType="submit">
						SIGN UP
					</Button>
				</BlackButtonContainer>
			</Form.Item>
		</Form>
	);
}
