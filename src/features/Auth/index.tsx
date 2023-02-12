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
import SignupForm from '@/features/Auth/SignupForm';
import { useLoginMutation } from './api';
import {
	setRoles,
	setSelectedRole,
	setToken,
	setUser,
} from '@/redux/authSlice';

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
					dispatch(setRoles(data?.result?.role));
					dispatch(setSelectedRole(data?.result?.role[0]));
					message.success(data?.message);
					navigate(PUBLIC_ROUTE.LANDING);
				}
			})
			.catch((err) => {
				if (err?.message) message.error(err?.message);
			});
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
					<Col xs={24} sm={24} md={20} lg={18} xxl={14}>
						<Card className="mt-5" bodyStyle={{ padding: 0 }}>
							<Row>
								<Col xs={24} sm={24} md={12}>
									<div
										style={{
											minHeight: 550,
											width: '100%',
											background: 'black',
											padding: 10,
											borderRadius: 3,
										}}
									>
										<div
											style={{
												width: '90%',
												// background: 'red',
												textAlign: 'center',
												color: 'white',
												position: 'absolute',
												top: '50%',
												left: '50%',
												transform: 'translate(-50%, -50%)',
											}}
										>
											<h1 style={{ color: 'white' }}>
												{isSignupActive
													? 'REGISTER AS A BUYER OR SELLER'
													: 'LOGIN TO YOUR ACCOUNT'}
											</h1>
											<p>
												Are you looking for an used bike or any kind of bike
												accessories? You are in the right place. Please login
												and pick your desired bike with a few clicks.
											</p>
										</div>
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
														{isSignupActive ? 'LOGIN ?' : 'REGISTER ?'}
													</Button>
												</Typography.Text>
											</Col>
										</Row>
									</div>
								</Col>

								<Col xs={24} sm={24} md={12}>
									{isSignupActive ? (
										<SignupForm />
									) : (
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
									)}
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
