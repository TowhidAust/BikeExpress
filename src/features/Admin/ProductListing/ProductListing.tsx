import { Col, Form, Input, Radio, Row, Select } from 'antd';

export default function ProductListing() {
	const [form] = Form.useForm();

	return (
		<Form
			size="large"
			form={form}
			name="basic"
			initialValues={{ remember: true }}
			autoComplete="off"
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 20 }}
			labelAlign="left"
			// onFinish={onFinish}
			// onValuesChange={handleFormValuesChange}
			// layout="vertical"
		>
			<Row gutter={[8, 8]}>
				<Col md={24}>
					<Form.Item label="Category">
						<Select
							showSearch
							placeholder="Select a category"
							optionFilterProp="children"
							filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
							options={[
								{ value: 'HELMET', label: 'HELMET' },
								{ value: 'ENGINE_OIL', label: 'ENGINE_OIL' },
							]}
						/>
					</Form.Item>
				</Col>
				<Col md={24}>
					<Form.Item label="Title">
						<Input placeholder="Your product title" />
					</Form.Item>
				</Col>
				<Col md={24}>
					<Form.Item label="Price">
						<Input placeholder="Your product price" type="number" onWheel={(e: any) => e.target.blur()} />
					</Form.Item>
				</Col>
				<Col md={24}>
					<Form.Item label="Availablity">
						<Radio.Group>
							<Radio value>In-Stock</Radio>
							<Radio value={false}>Out of Stock</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col md={24}>
					<Form.Item label="Warranty">
						<Input placeholder="Warranty" type="number" onWheel={(e: any) => e.target.blur()} />
					</Form.Item>
				</Col>
				<Col md={24}>
					<Form.Item label="Warranty Unit">
						<Select
							showSearch
							placeholder="Select a warranty unit"
							optionFilterProp="children"
							filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
							options={[
								{ value: 'YEAR', label: 'YEAR' },
								{ value: 'MONTH', label: 'MONTH' },
								{ value: 'DAY', label: 'DAY' },
								{ value: 'WEEK', label: 'WEEK' },
							]}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
}
