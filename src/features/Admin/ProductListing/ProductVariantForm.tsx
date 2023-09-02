import { Form, Input } from 'antd';

export default function ProductVariantForm() {
	return (
		<Form className="mt-5" size="large">
			<Form.Item>
				<Input placeholder="Your Product Color" />
			</Form.Item>
		</Form>
	);
}
