import { Form, Input } from 'antd';

export default function ProductVariantForm() {
	return (
		<Form size="large">
			<Form.Item>
				<Input placeholder="Your Product Color" />
			</Form.Item>
		</Form>
	);
}
