import {
	Button,
	Card,
	Col,
	Form,
	Input,
	Layout,
	message,
	Row,
	Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '@/components/Logo/Logo';
import { PUBLIC_ROUTE } from '@/router/appRoutes';
import Signup from '@/features/Auth/SignupScreen';
import { useLoginMutation } from './api';
import { setToken, setUser } from '@/redux/authSlice';

const { Content } = Layout;

export default function Auth() {
	const [isSignupActive, setIsSignupActive] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [loginMutation, { isLoading }] = useLoginMutation();

	const onFinish = (values: any) => {
		loginMutation(values)
			.unwrap()
			.then((data) => {
				if (data) {
					dispatch(setUser(data?.result));
					dispatch(setToken(data?.token));
					message.success(data?.message);
					navigate(PUBLIC_ROUTE.LANDING);
				}
			})
			.catch(() => {});
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
				<Row justify="center" align="middle">
					<Col xs={24} sm={24} md={20} lg={20}>
						<Card className="mt-5" bodyStyle={{ padding: 0 }}>
							<Row gutter={[16, 16]}>
								<Col md={12}>
									<div
										style={{
											height: '100%',
											background: 'black',
											padding: 10,
											borderRadius: 3,
										}}
									>
										<Row
											gutter={8}
											className="text-center"
											justify="space-between"
											align="middle"
										>
											<Col md={8}>
												<Logo fontColor="white" />
											</Col>

											<Col md={8}>
												<Typography.Text style={{ color: 'white' }}>
													<Button
														type="primary"
														onClick={() => {
															setIsSignupActive(!isSignupActive);
														}}
													>
														Sign Up
													</Button>
												</Typography.Text>
											</Col>
										</Row>
									</div>
								</Col>

								<Col md={12}>
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
											name="phone"
											rules={[
												{
													required: true,
													message: 'Please input your phone number!',
												},
											]}
										>
											<Input placeholder="Please enter your phone" />
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

										{isSignupActive ? <Signup /> : ''}
										<Form.Item>
											<Button
												loading={isLoading}
												block
												size="large"
												type="primary"
												htmlType="submit"
											>
												Submit
											</Button>
										</Form.Item>
									</Form>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
