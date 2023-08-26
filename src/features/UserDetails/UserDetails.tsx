import { Avatar, Button, Card, Col, Divider, Form, Input, Row, Select, Typography, message } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserDetailsQuery, useUpdateUserDetailsMutation } from './api';
import { RootState } from '@/redux/store';
import { DISTRICTS, DIVISIONS } from '@/constants';
import { UserModel } from '@/models';
import { setUser } from '@/redux/authSlice';
import { PromiseHandler } from '@/utils';

export default function UserDetails() {
	const [isProfileEdit, setIsProfileEdit] = useState<boolean>(true);
	const [selectedPresentDivision, setSelectedPresentDivision] = useState<any[]>();
	const [selectedDivision, setSelectedDivision] = useState<any[]>();
	const { auth } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const { data, isLoading, error } = useGetUserDetailsQuery({ userId: auth?.user?.id });
	const [updateUserMutation, { isLoading: isUpdateUserLoading }] = useUpdateUserDetailsMutation();

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedPresentDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}

		if (value?.deliveryDivision) {
			form.resetFields(['deliveryDistrict']);
			setSelectedDivision(DISTRICTS[value?.deliveryDivision as keyof typeof DISTRICTS]);
		}
	};

	const updateUserHandler = async (values: any) => {
		const modifiedValues: UserModel = {
			firstname: values?.firstname,
			lastname: values?.lastname,
			division: values?.division,
			district: values?.district,
			address: values?.address,
			deliveryLocation: {
				division: values?.deliveryDivision,
				district: values?.deliveryDistrict,
				address: values?.deliveryAddress,
			},
		};

		const [snapshot, updateUserError] = await PromiseHandler(
			updateUserMutation({
				userId: auth?.user?.id,
				payload: modifiedValues,
			}).unwrap(),
		);

		if (snapshot) {
			message.success('Update Success');
			dispatch(
				setUser({
					...auth.user,
					...{ firstname: values?.firstname },
				}),
			);
		}

		if (updateUserError) {
			message.error(updateUserError?.message || 'Something went wrong!');
		}
	};

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
						form={form}
						size="large"
						layout="horizontal"
						labelCol={{ span: 7 }}
						wrapperCol={{ span: 18 }}
						labelAlign="left"
						disabled={isProfileEdit}
						onValuesChange={handleFormValuesChange}
						initialValues={{
							firstname: data?.result?.firstname,
							lastname: data?.result?.lastname,
							phone: data?.result?.phone,
							division: data?.result?.division,
							district: data?.result?.district,
							address: data?.result?.address,
							deliveryDivision: data?.result?.division,
							deliveryDistrict: data?.result?.district,
							deliveryAddress: data?.result?.address,
						}}
						onFinish={updateUserHandler}
					>
						<Row gutter={[64, 8]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="First Name"
									name="firstname"
									rules={[
										{
											required: true,
											message: 'Please input First Name!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="Last Name"
									name="lastname"
									rules={[
										{
											required: true,
											message: 'Please input Last Name!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="Phone"
									name="phone"
									rules={[
										{
											required: true,
											message: 'Please input phone!',
										},
									]}
								>
									<Input disabled />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="Division"
									name="division"
									rules={[
										{
											required: true,
											message: 'Please input division!',
										},
									]}
								>
									<Select
										showSearch
										optionFilterProp="children"
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={DIVISIONS}
									/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="District"
									name="district"
									rules={[
										{
											required: true,
											message: 'Please input district!',
										},
									]}
								>
									<Select
										showSearch
										optionFilterProp="children"
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={selectedPresentDivision}
									/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="Detail Address"
									name="address"
									rules={[
										{
											required: true,
											message: 'Please input address!',
										},
									]}
								>
									<Input />
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
								<Form.Item
									className="m-0"
									label="Division"
									name="deliveryDivision"
									rules={[
										{
											required: true,
											message: 'Please input delivery division!',
										},
									]}
								>
									<Select
										showSearch
										optionFilterProp="children"
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={DIVISIONS}
									/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="District"
									name="deliveryDistrict"
									rules={[
										{
											required: true,
											message: 'Please input delivery district!',
										},
									]}
								>
									<Select
										showSearch
										optionFilterProp="children"
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
										options={selectedDivision}
									/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									className="m-0"
									label="Detail Address"
									name="deliveryAddress"
									rules={[
										{
											required: true,
											message: 'Please input delivery address!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24}>
								{!isProfileEdit && (
									<Button className="mt-3" type="primary" block htmlType="submit" loading={isUpdateUserLoading}>
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
