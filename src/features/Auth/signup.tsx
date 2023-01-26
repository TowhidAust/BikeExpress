import { Button, Card, Col, Form, Input, Layout, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo/Logo';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

const { Content } = Layout;
export default function Auth() {
	const navigate = useNavigate();

	const onFinish = () => {
		// console.log('Success:', values);
		navigate(PUBLIC_ROUTE.LANDING);
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
						<Card className="mt-5" bodyStyle={{ padding: 0 }}>
							<div
								style={{ background: 'black', padding: 10, borderRadius: 3 }}
							>
								<Row
									gutter={8}
									className="text-center"
									justify="center"
									align="middle"
								>
									<Col md={6}>
										<Logo fontColor="white" />
									</Col>
									<Col md={24}>
										<Typography.Text style={{ color: 'white' }}>
											Signup
										</Typography.Text>
									</Col>
								</Row>
							</div>

							<Form
								style={{ padding: '50px 40px' }}
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								size="large"
								name="basic"
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
								layout="vertical"
							>
								<Form.Item
									// label="Username"
									name="name"
									rules={[
										{ required: true, message: 'Please input your name!' },
									]}
								>
									<Input placeholder="Please enter your full name" />
								</Form.Item>

								<Form.Item
									// label="Phone"
									name="phone"
									rules={[
										{ required: true, message: 'Please input your phone!' },
									]}
								>
									<Input placeholder="Please enter your phone" />
								</Form.Item>

								<Form.Item
									// label="Password"
									name="password"
									rules={[
										{ required: true, message: 'Please input your password!' },
									]}
								>
									<Input.Password placeholder="Please enter your password" />
								</Form.Item>

								<Form.Item>
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
