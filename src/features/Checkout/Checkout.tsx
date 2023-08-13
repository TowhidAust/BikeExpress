import { Button, Card, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Typography } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DISTRICTS, DIVISIONS } from '@/constants';
import { useGetUserDetailsQuery } from '../UserDetails/api';
import { RootState } from '@/redux/store';
import SingleSkeleton from '@/components/Skeleton/SingleSkeleton';

export default function Checkout() {
	const [selectedPresentDivision, setSelectedPresentDivision] = useState<any[]>();
	const [radioValue, setRadioValue] = useState(1);
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
		const price = _orderSummary?.price;
		const discount = _orderSummary?.discount;
		const quantity = _orderSummary?.quantity;
		const totalPrice = price * quantity;

		return totalPrice - (price * quantity * discount) / 100;
	};

	if (userDetailsError) {
		return <div>Something went wrong!</div>;
	}

	if (userDetailsLoading) {
		return <SingleSkeleton isLoading={userDetailsLoading} />;
	}

	if (userDetailsData) {
		return (
			<Card loading={userDetailsLoading}>
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
							initialValues={{
								division: userDetailsData?.result?.deliveryLocation?.division,
								district: userDetailsData?.result?.deliveryLocation?.district,
								address: userDetailsData?.result?.deliveryLocation?.address,
							}}
						>
							<Row gutter={[8, 8]}>
								<Col xs={24} sm={24} md={24}>
									<section>
										<Typography.Title className="m-0 primary-font-color" level={5}>
											Choose a Payment Method
										</Typography.Title>
										<Divider className="mt-2 mb-3" />
										<Radio.Group onChange={onRadioBtnChange} value={radioValue} buttonStyle="solid">
											<Radio.Button value={1}>CASH ON DELIVERY</Radio.Button>
											<Radio.Button value={2}>DIGITAL PAYMENT</Radio.Button>
										</Radio.Group>
									</section>
								</Col>

								<Col xs={24} sm={24} md={24}>
									<Typography.Title className="mt-4 mb-0 primary-font-color" level={5}>
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
									<Button className="mt-2" type="primary" htmlType="submit" block>
										SUBMIT
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
					<Col xs={24} sm={24} md={12}>
						<Typography.Title className="m-0 primary-font-color" level={5}>
							Your Order Summary
						</Typography.Title>
						<Divider className="mt-2 mb-2" />
						<Typography.Title className="font-weight-400" level={5}>
							{orderSummary?.productTitle || 'N/A'}
						</Typography.Title>
						<Typography.Text> Price: {orderSummary?.price || 0}</Typography.Text>
						<br />
						<Typography.Text> Quantity: {orderSummary?.quantity || 0} </Typography.Text> <br />
						<Typography.Text> Discount: {orderSummary?.discount || 0} </Typography.Text> <br />
						<Typography.Text>Total: {calculateSubtotal(orderSummary)}</Typography.Text>
					</Col>
				</Row>
			</Card>
		);
	}
}
