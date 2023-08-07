import { Avatar, Button, Card, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetUserDetailsQuery } from './api';
import { RootState } from '@/redux/store';

export default function UserDetails() {
	const [isProfileEdit, setIsProfileEdit] = useState<boolean>(true);
	const { auth } = useSelector((state: RootState) => state);
	const { data, isLoading, error } = useGetUserDetailsQuery({ userId: auth?.user?.id });

	if (error) {
		return <div>Something went wrong!</div>;
	}

	return (
		<Card loading={isLoading} className="p-4">
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
									<Input defaultValue={data?.result?.firstname || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Last Name" name="lastname">
									<Input defaultValue={data?.result?.lastname || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Phone" name="phone">
									<Input defaultValue={data?.result?.phone || 'N/A'} disabled />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Division" name="division">
									<Input defaultValue={data?.result?.division || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="District" name="district">
									<Input defaultValue={data?.result?.district || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Address" name="address">
									<Input defaultValue={data?.result?.address || 'N/A'} />
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
									<Input defaultValue={data?.result?.deliveryLocation?.division || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="District" name="deliveryDistrict">
									<Input defaultValue={data?.result?.deliveryLocation?.district || 'N/A'} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item className="m-0" label="Address" name="deliveryAddress">
									<Input defaultValue={data?.result?.deliveryLocation?.address || 'N/A'} />
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
