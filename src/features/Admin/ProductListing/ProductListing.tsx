import { Form, Input, Select } from 'antd';

export default function ProductListing() {
	const [form] = Form.useForm();

	return (
		<Form
			size="large"
			form={form}
			name="basic"
			initialValues={{ remember: true }}
			autoComplete="off"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			labelAlign="left"
			// onFinish={onFinish}
			// onValuesChange={handleFormValuesChange}
			// layout="vertical"
		>
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
			<Form.Item label="Title">
				<Input placeholder="Your product title" />
			</Form.Item>
			<Form.Item label="Price">
				<Input placeholder="Your product price" type="number" onWheel={(e: any) => e.target.blur()} />
			</Form.Item>
		</Form>
	);
}
