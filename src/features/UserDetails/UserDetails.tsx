import { Avatar, Button, Card, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { useState } from 'react';

export default function UserDetails() {
	const [isProfileEdit, setIsProfileEdit] = useState<boolean>(true);
	return (
		<Card className="p-4">
			<Row gutter={[8, 8]}>
				<Col className="text-center" xs={24} sm={24} md={6}>
					<Avatar
						size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 120 }}
						src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
					/>
					<Typography.Title level={5}>Md. Towhidul Islam</Typography.Title>
					<Button type="link" block onClick={() => setIsProfileEdit(!isProfileEdit)}>
						{isProfileEdit ? 'Edit Profile' : <Typography.Text style={{ color: 'red' }}>Cancel Edit</Typography.Text>}
					</Button>
				</Col>
				<Col xs={24} sm={24} md={18}>
					<Form
						size="large"
						layout="horizontal"
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 18 }}
						labelAlign="left"
						disabled={isProfileEdit}
					>
						<Row gutter={[64, 8]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="First Name" name="firstname">
									<Input defaultValue="Towhidul" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Last Name" name="lastname">
									<Input defaultValue="Islam" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Phone" name="phone">
									<Input defaultValue="01737010194" disabled />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Division" name="division">
									<Input defaultValue="Dhaka" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="District" name="district">
									<Input defaultValue="Dhaka" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Address" name="address">
									<Input defaultValue="Dhaka" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24}>
								<Typography.Title className="mt-5 primary-font-color" level={5}>
									Delivery Address
								</Typography.Title>
							</Col>
							<Col xs={24} sm={24} md={24}>
								<Divider className="mt-2 mb-2" />
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Division" name="deliveryDivision">
									<Input defaultValue="Dhaka" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="District" name="deliveryDistrict">
									<Input defaultValue="Dhanmondi" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Address" name="deliveryAddress">
									<Input defaultValue="Court House Street 123/4" />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24}>
								{!isProfileEdit && (
									<Button className="mt-3" type="primary" block htmlType="submit">
										Submit
									</Button>
								)}
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Card>
	);
}
