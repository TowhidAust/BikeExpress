import { useState } from 'react';
import { Button, Form, Select, Typography } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';
import { DISTRICTS, DIVISIONS } from '@/constants';

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
			<Typography.Title level={5}>
				Obcaecati mollitia saepe numquam et perspiciatis nam quidem molestias,
				itaque magnam blanditiis quod odit ipsam impedit debitis sit, explicabo
				doloremque quo rem iure voluptatem architecto, enim culpa totam! Alias
				quis numquam eos nesciunt consequatur, asperiores at libero maxime nihil
				cumque maiores laudantium rerum blanditiis a, sunt reprehenderit quam
				corrupti dolorum error quaerat officiis iusto distinctio. At doloribus
				impedit voluptatem sequi! Omnis explicabo ipsam aut rerum aliquam
				impedit nemo unde ea porro, ex ratione similique cumque aliquid adipisci
				cupiditate vel animi, molestias blanditiis? Debitis nemo neque.
			</Typography.Title>
			<section>
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

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</section>
		</AppLayout>
	);
}
