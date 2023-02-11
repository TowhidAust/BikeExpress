import { Button, Form, Input, Select } from 'antd';

export default function SignupForm() {
	return (
		<Form
			style={{ padding: '50px 40px' }}
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			size="large"
			name="basic"
			initialValues={{ remember: true }}
			// onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
			autoComplete="off"
			layout="vertical"
		>
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
				name="passord"
				rules={[
					{
						required: true,
						message: 'Enter your password!',
					},
				]}
			>
				<Input.Password placeholder="Enter your password" />
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
				<Input.Password placeholder="Confirm your password" />
			</Form.Item>

			<Form.Item
				name="passord"
				rules={[
					{
						required: true,
						message: 'Enter your password!',
					},
				]}
			>
				<Select
					placeholder="Select user type"
					// defaultValue="BUYER"
					size="large"
					// onChange={handleChange}
					options={[
						{
							value: 'BUYER',
							label: 'I WANT TO BUY',
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
					// loading={isLoading}
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
