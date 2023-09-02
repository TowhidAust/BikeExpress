import { Steps, Button, Row, Col } from 'antd';
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
		<>
			<Steps
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
			{current === 0 && <ProductListForm />}
			{current === 1 && (
				<div>
					<ProductVariantForm />
				</div>
			)}
			{current === 2 && <div>Upload Images</div>}
			{current === 3 && <div>Overview</div>}
			{current === 4 && <div>Done</div>}
			<Row gutter={[16, 16]}>
				<Col md={12}>
					<Button type="dashed" size="large" block onClick={prev} disabled={current === 0}>
						PREV
					</Button>
				</Col>
				<Col md={12}>
					<Button type="primary" size="large" block onClick={next} disabled={current === 5}>
						NEXT
					</Button>
				</Col>
			</Row>
		</>
	);
}
