import { Button, Card, Col, Layout, Row } from 'antd';
import { useState } from 'react';
import Logo from '@/components/Logo/Logo';
import SignupForm from '@/features/Auth/SignupForm';

import LoginForm from './LoginForm';

const { Content, Header } = Layout;

export default function Auth() {
	const [isSignupActive, setIsSignupActive] = useState<boolean>(false);

	return (
		<Layout>
			<Content
				style={{
					minHeight: '100vh',
				}}
			>
				<Header style={{ backgroundColor: 'black', color: 'white', marginBottom: '40px' }}>
					<Logo fontColor="white" width={150} fontSize={16} iconFontSize={22} />
				</Header>
				<Row justify="center" align="middle">
					<Col xs={24} sm={24} md={8} lg={8} xxl={8}>
						<Card>
							<Row>
								<Col xs={24} sm={24} md={24}>
									{isSignupActive ? <SignupForm /> : <LoginForm />}
									<Button
										block
										size="small"
										className="m-0"
										type="link"
										onClick={() => {
											setIsSignupActive(!isSignupActive);
										}}
									>
										{isSignupActive ? 'LOGIN ?' : 'REGISTER ?'}
									</Button>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
