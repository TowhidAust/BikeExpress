import { Button, Form, Input, message, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from './api';
import {
	setRoles,
	setSelectedRole,
	setToken,
	setUser,
} from '@/redux/authSlice';

export default function SignupForm() {
	const dispatch = useDispatch();
	const [signupMutation, { isLoading }] = useSignupMutation();
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
			})
			.catch((err) => {
				if (err?.message) message.error(err?.message);
			});
	};

	return (
		<Form
			style={{ padding: '40px 40px' }}
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			size="large"
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
			autoComplete="off"
			layout="vertical"
		>
			<div className="container mx-auto">GG</div>
			<Form.Item
				name="phone"
				rules={[
					{
						required: true,
						message: 'Please enter your phone number!',
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
				<Button
					loading={isLoading}
					block
					size="large"
					type="primary"
					htmlType="submit"
				>
					SIGN UP
				</Button>
			</Form.Item>
		</Form>
	);
}
