import { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';
import { BIKELIST, DISTRICTS, DIVISIONS } from '@/constants';

export default function SellBike() {
	const [selectedDivision, setSelectedDivision] = useState<any[]>();
	const [form] = Form.useForm();

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}
	};

	const onFinish = (value: any) => {
		// eslint-disable-next-line no-console
		console.log(value);
	};

	return (
		<AppLayout>
			<section>
				<Row gutter={[8, 8]}>
					<Col sm={24} md={12}>
						<Card
							title="Sell Your Bike"
							headStyle={{ backgroundColor: 'black', color: 'white' }}
							bodyStyle={{
								background: 'black url(src/assets/cafeRacer.jpg) no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								padding: 0,
								minHeight: '75vh',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								color: 'white',
							}}
						>
							<div
								style={{
									background: 'rgba(0, 0, 0, 0.75)',
									padding: '10px 30px',
									height: '75vh',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
								inventore quisquam illum beatae, at laudantium numquam dolorum
								blanditiis ipsum fugit totam iure facere aliquid illo ab nisi
								facilis nulla. Eveniet!
							</div>
						</Card>
					</Col>
					<Col sm={24} md={12}>
						<Card title="Fill This Form" bodyStyle={{ minHeight: '75vh' }}>
							<Form
								form={form}
								name="basic"
								// labelCol={{ span: 8 }}
								// wrapperCol={{ span: 16 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								// onFinishFailed={onFinishFailed}
								autoComplete="off"
								size="large"
								onValuesChange={handleFormValuesChange}
							>
								<Form.Item
									name="Bike Brand"
									rules={[
										{
											required: true,
											message: 'Please input your bike brand!',
										},
									]}
								>
									<Select
										showSearch
										placeholder="Select your bike"
										optionFilterProp="children"
										// onChange={onChange}
										// onSearch={onSearch}
										// value={autoCompleteText}
										// onChange={handleChange}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKELIST}
									/>
								</Form.Item>

								<Form.Item
									name="division"
									rules={[
										{
											required: true,
											message: 'Please input your division!',
										},
									]}
								>
									<Select
										showSearch
										placeholder="Select your division"
										optionFilterProp="children"
										// onChange={onChange}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={DIVISIONS}
									/>
								</Form.Item>

								{selectedDivision && (
									<Form.Item
										name="district"
										rules={[
											{
												required: true,
												message: 'Please input your district!',
											},
										]}
									>
										<Select
											showSearch
											placeholder="Select your district"
											optionFilterProp="children"
											// onChange={onChange}
											// onSearch={onSearch}
											filterOption={(input, option) =>
												(option?.label ?? '')
													.toLowerCase()
													.includes(input.toLowerCase())
											}
											options={selectedDivision}
										/>
									</Form.Item>
								)}
								<Form.Item
									name="phone"
									rules={[
										{
											required: true,
											message: 'Please input your phone number',
										},
									]}
								>
									<Input placeholder="Phone number" type="text" />
								</Form.Item>
								<Form.Item
									name="yearOfRegistration"
									rules={[
										{
											required: true,
											message: 'Please input your yearOfRegistration!',
										},
									]}
								>
									<Select
										showSearch
										placeholder="Select Year of Registration"
										optionFilterProp="children"
										// onChange={onChange}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKELIST}
									/>
								</Form.Item>
								<Form.Item
									name="durationOfRegistration"
									rules={[
										{
											required: true,
											message: 'Please input duration of registration!',
										},
									]}
								>
									<Select
										showSearch
										placeholder="Select duration of registration"
										optionFilterProp="children"
										// onChange={onChange}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKELIST}
									/>
								</Form.Item>
								<Form.Item
									name="bikeModelYear"
									rules={[
										{
											required: true,
											message: 'Please input bike model year!',
										},
									]}
								>
									<Select
										showSearch
										placeholder="Select bike model year"
										optionFilterProp="children"
										// onChange={onChange}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKELIST}
									/>
								</Form.Item>
								<Form.Item>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</section>
		</AppLayout>
	);
}
