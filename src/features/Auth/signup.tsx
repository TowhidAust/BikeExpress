import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';

const { Content } = Layout;
export default function Auth() {
	const onFinish = () => {
		// console.log('Success:', values);
	};

	const onFinishFailed = () => {
		// console.log('Failed:', errorInfo);
	};
	return (
		<Layout>
			<Content
				style={{
					minHeight: '100vh',
				}}
			>
				<Row gutter={[16, 16]} justify="center" align="middle">
					<Col xs={24} sm={24} md={12} lg={12}>
						<Card className="mt-5">
							<Form
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								size="large"
								name="basic"
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
							>
								<Form.Item
									label="Username"
									name="name"
									rules={[
										{ required: true, message: 'Please input your name!' },
									]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Email"
									name="email"
									rules={[
										{ required: true, message: 'Please input your email!' },
									]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Phone"
									name="phone"
									rules={[
										{ required: true, message: 'Please input your phone!' },
									]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Address"
									name="address"
									rules={[
										{ required: true, message: 'Please input your address!' },
									]}
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Password"
									name="password"
									rules={[
										{ required: true, message: 'Please input your password!' },
									]}
								>
									<Input.Password />
								</Form.Item>
								<Form.Item wrapperCol={{ offset: 4, span: 20 }}>
									<Button block size="large" type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
