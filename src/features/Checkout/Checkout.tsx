import { Card, Col, Divider, Form, Input, Radio, RadioChangeEvent, Row, Select, Typography } from 'antd';
import { useState } from 'react';
import { DISTRICTS, DIVISIONS } from '@/constants';

export default function Checkout() {
	const [selectedPresentDivision, setSelectedPresentDivision] = useState<any[]>();
	const [radioValue, setRadioValue] = useState(1);
	const [form] = Form.useForm();

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedPresentDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}
	};
	const onRadioBtnChange = (e: RadioChangeEvent) => {
		setRadioValue(e.target.value);
	};
	return (
		<Card>
			<Row gutter={[32, 16]}>
				<Col xs={24} sm={24} md={12}>
					<Typography.Title className="m-0 primary-font-color" level={5}>
						Confirm Delivery Address
					</Typography.Title>
					<Divider className="mt-2 mb-3" />
					<Form
						form={form}
						size="large"
						layout="horizontal"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 18 }}
						labelAlign="left"
						onValuesChange={handleFormValuesChange}
					>
						<Row gutter={[8, 8]}>
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
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
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
										filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
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
						</Row>
					</Form>
					<br />
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
				<Col xs={24} sm={24} md={12}>
					<Typography.Title className="m-0 primary-font-color" level={5}>
						Your Order Summary
					</Typography.Title>
					<Divider className="mt-2 mb-3" />
				</Col>
			</Row>
		</Card>
	);
}
