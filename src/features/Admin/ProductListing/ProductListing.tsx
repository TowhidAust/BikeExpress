import { Col, Form, Input, Radio, Row, Select, Space, Steps } from 'antd';

export default function ProductListing() {
	const [form] = Form.useForm();

	return (
		<Space direction="vertical" size="large">
			<Steps
				items={[
					{
						title: 'Product Information',
						status: 'process',
					},
					{
						title: 'Upload Thumbnail',
						status: 'wait',
					},
					{
						title: 'Upload Images',
						status: 'wait',
					},
					{
						title: 'Overview',
						status: 'wait',
					},
					{
						title: 'Done',
						status: 'wait',
					},
				]}
			/>
			<Form
				size="large"
				form={form}
				name="basic"
				initialValues={{ remember: true }}
				autoComplete="off"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 18 }}
				labelAlign="left"
				// onFinish={onFinish}
				// onValuesChange={handleFormValuesChange}
				// layout="vertical"
			>
				<Row gutter={[32, 0]}>
					<Col md={12}>
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
					<Col md={12}>
						<Form.Item label="Title">
							<Input placeholder="Your product title" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Price">
							<Input placeholder="Your product price" type="number" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Availablity">
							<Radio.Group>
								<Radio value>In-Stock</Radio>
								<Radio value={false}>Out of Stock</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Warranty">
							<Input placeholder="Warranty" type="number" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={12}>
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
					<Col md={12}>
						<Form.Item label="Brand">
							<Input placeholder="Enter product brand" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Made In">
							<Input placeholder="Enter brand origin" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Model No">
							<Input placeholder="Enter model no" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Model Year">
							<Input placeholder="Enter model year" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Is Certified">
							<Radio.Group>
								<Radio value>Yes</Radio>
								<Radio value={false}>No</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Certification Name">
							<Input placeholder="Enter Certification name" />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Quantity">
							<Input type="number" placeholder="Enter Total quantity" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={12}>
						<Form.Item label="Description">
							<Input placeholder="Enter Description" />
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Space>
	);
}
