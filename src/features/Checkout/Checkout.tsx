import { Button, Card, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Typography } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DISTRICTS, DIVISIONS } from '@/constants';
import { useGetUserDetailsQuery } from '../UserDetails/api';
import { RootState } from '@/redux/store';
import SingleSkeleton from '@/components/Skeleton/SingleSkeleton';
import { BlackButtonContainer } from '@/styles/styled/BlackButtonContainer';

export default function Checkout() {
	const [selectedPresentDivision, setSelectedPresentDivision] = useState<any[]>();
	const [radioValue, setRadioValue] = useState('CASH');
	const { auth, orderSummary } = useSelector((state: RootState) => state);
	const [form] = Form.useForm();
	const {
		data: userDetailsData,
		isLoading: userDetailsLoading,
		error: userDetailsError,
	} = useGetUserDetailsQuery({ userId: auth?.user?.id });

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedPresentDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}
	};

	const onRadioBtnChange = (e: RadioChangeEvent) => {
		setRadioValue(e.target.value);
	};

	const calculateSubtotal = (_orderSummary: any) => {
		const { items } = _orderSummary;

		let finalPrice: number = 0;
		items?.forEach((orderItems: any) => {
			const price = orderItems?.price || 0;
			const discount = orderItems?.discount || 0;
			const quantity = orderItems?.quantity || 0;
			const totalPrice = price * quantity;
			const totalPriceAfterDiscount = totalPrice - (totalPrice * discount) / 100;
			finalPrice += totalPriceAfterDiscount;
		});
		return finalPrice;
	};

	const onFinish = (values: any) => {
		// eslint-disable-next-line no-console
		console.log(values);
	};

	if (userDetailsError) {
		return <div>Something went wrong!</div>;
	}

	if (userDetailsLoading) {
		return <SingleSkeleton isLoading={userDetailsLoading} />;
	}

	if (userDetailsData) {
		return (
			<Card>
				<Row gutter={[32, 16]}>
					<Col xs={24} sm={24} md={12}>
						<Form
							form={form}
							size="large"
							layout="horizontal"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 18 }}
							labelAlign="left"
							onValuesChange={handleFormValuesChange}
							onFinish={onFinish}
							initialValues={{
								division: userDetailsData?.result?.deliveryLocation?.division,
								district: userDetailsData?.result?.deliveryLocation?.district,
								address: userDetailsData?.result?.deliveryLocation?.address,
								paymentMethod: 'CASH',
							}}
						>
							<Row gutter={[8, 8]}>
								<Col xs={24} sm={24} md={24}>
									<Typography.Title className="m-0" level={5}>
										Choose a Payment Method
									</Typography.Title>
									<Divider className="mt-2 mb-1" />
									<Form.Item className="mb-2" name="paymentMethod">
										<Radio.Group onChange={onRadioBtnChange} value={radioValue} buttonStyle="solid" size="middle">
											<Radio.Button value="CASH"> CASH ON DELIVERY </Radio.Button>
											<Radio.Button value="DIGITAL" disabled>
												DIGITAL PAYMENT
											</Radio.Button>
										</Radio.Group>
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={24}>
									<Typography.Title className="m-0" level={5}>
										Confirm Delivery Address
									</Typography.Title>
								</Col>

								<Divider className="mt-0 mb-3" />
								<Col xs={24} sm={24} md={24}>
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
											filterOption={(input, option) =>
												(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
											}
											options={DIVISIONS}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
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
											filterOption={(input, option) =>
												(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
											}
											options={selectedPresentDivision}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
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
									<BlackButtonContainer>
										<Button className="mt-2" type="primary" htmlType="submit" block>
											SUBMIT
										</Button>
									</BlackButtonContainer>
								</Col>
							</Row>
						</Form>
					</Col>
					{orderSummary?.items?.map((items) => (
						<Col xs={24} sm={24} md={12} key={items?.productId}>
							<Typography.Title className="m-0 primary-font-color" level={5}>
								Your Order Summary
							</Typography.Title>
							<Divider className="mt-2 mb-2" />
							<Typography.Title className="font-weight-400" level={5}>
								{items?.title}
							</Typography.Title>
							<Typography.Text> Price: {items?.price}</Typography.Text>
							<br />
							<Typography.Text> Quantity: {items?.quantity} </Typography.Text> <br />
							<Typography.Text> Discount: {items?.discount} </Typography.Text> <br />
							<Divider />
							<Typography.Text>Total: {calculateSubtotal(orderSummary)}</Typography.Text>
						</Col>
					))}
				</Row>
			</Card>
		);
	}
}
