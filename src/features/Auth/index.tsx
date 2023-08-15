import { Button, Card, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import Logo from '@/components/Logo/Logo';
import SignupForm from '@/features/Auth/SignupForm';

import LoginForm from './LoginForm';

const { Content } = Layout;

export default function Auth() {
	const [isSignupActive, setIsSignupActive] = useState<boolean>(false);

	return (
		<Layout>
			<Content
				style={{
					minHeight: '100vh',
				}}
			>
				<Row justify="center" align="middle">
					<Col xs={24} sm={24} md={20} lg={18} xxl={14}>
						<Card className="mt-4 mb-4" bodyStyle={{ padding: 0 }}>
							<Row>
								<Col xs={24} sm={24} md={12}>
									<div
										style={{
											minHeight: 600,
											width: '100%',
											padding: 10,
											borderRadius: 3,
										}}
									>
										<div
											style={{
												backgroundColor: 'black',
												width: '100%',
												height: '100%',
												textAlign: 'center',
												color: 'white',
												position: 'absolute',
												top: '50%',
												left: '50%',
												transform: 'translate(-50%, -50%)',
											}}
										>
											<Row gutter={[8, 8]} className="text-center p-2" justify="space-between" align="middle">
												<Col md={8}>
													<Button type="link">
														<Logo fontColor="white" width={150} fontSize={16} iconFontSize={22} />
													</Button>
												</Col>
												<Col md={8}>
													<Button
														block
														className="p-0 m-0"
														type="link"
														onClick={() => {
															setIsSignupActive(!isSignupActive);
														}}
													>
														{isSignupActive ? 'LOGIN ?' : 'REGISTER ?'}
													</Button>
												</Col>
											</Row>

											<div
												className="p-5"
												style={{
													position: 'relative',
													top: '40%',
													left: '50%',
													transform: 'translate(-50%, -50%)',
												}}
											>
												<h1 style={{ color: 'white' }}>
													{isSignupActive ? 'REGISTER AS A BUYER OR SELLER' : 'LOGIN TO YOUR ACCOUNT'}
												</h1>
												<p>
													Unsure about which Vehicle to Buy? Share your requirement with us, and let us find the Best
													Vehicle for you!. Please login and pick your desired bike with a few clicks.
												</p>
											</div>
										</div>
									</div>
								</Col>

								<Col xs={24} sm={24} md={12}>
									{isSignupActive ? <SignupForm /> : <LoginForm />}
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
