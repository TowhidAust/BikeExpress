import { Steps, Button, Row, Col, Card } from 'antd';
import { useState } from 'react';
import ProductListForm from './ProductListForm';
import ProductVariantForm from './ProductVariantForm';

export default function ProductListing() {
	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	return (
		<Card style={{ padding: 18 }}>
			<Steps
				className="mb-8"
				current={current}
				items={[
					{
						title: 'Product Information',
					},
					{
						title: 'Product Variant',
					},
					{
						title: 'Upload Thumbnail',
					},
					{
						title: 'Upload Images',
					},
					{
						title: 'Overview',
					},
					{
						title: 'Done',
					},
				]}
			/>
			{current === 0 && <ProductListForm current={current} setCurrent={setCurrent} />}
			{current === 1 && (
				<div>
					<ProductVariantForm />
				</div>
			)}
			{current === 2 && <div>Upload Images</div>}
			{current === 3 && <div>Overview</div>}
			{current === 4 && <div>Done</div>}
			{current > 0 && (
				<Row gutter={[16, 16]} className="mt-8">
					<Col md={12}>
						<Button type="dashed" size="large" block onClick={prev} disabled={current === 0}>
							PREV
						</Button>
					</Col>
					<Col md={12}>
						<Button
							className="underline"
							type="primary"
							size="large"
							block
							onClick={next}
							disabled={current === 5}
							htmlType="submit"
						>
							NEXT
						</Button>
					</Col>
				</Row>
			)}
		</Card>
	);
}
