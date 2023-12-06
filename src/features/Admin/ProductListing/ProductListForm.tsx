import { Col, Form, Input, Radio, Row, Select, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setProductInformation } from '@/redux/admin/listProductSlice';

type PropTypes = {
	current: number;
	setCurrent: any;
};

export default function ProductListForm(props: PropTypes) {
	const { setCurrent, current } = props;
	const { listProduct } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const onFinish = (value: any) => {
		// eslint-disable-next-line no-console
		console.log(value);
		dispatch(setProductInformation(value));
		setCurrent(current + 1);
	};

	return (
		<Space direction="vertical" size="large">
			<Form
				size="large"
				form={form}
				name="basic"
				initialValues={{
					title: listProduct.productInformation.title,
					category: listProduct.productInformation.category,
					price: listProduct.productInformation.price,
					hasSku: listProduct.productInformation.hasSku,
					inStock: listProduct.productInformation.inStock,
					warranty: listProduct.productInformation.warranty,
					warrantyUnit: listProduct.productInformation.warrantyUnit,
					brand: listProduct.productInformation.brand,
					madeIn: listProduct.productInformation.madeIn,
					modelNo: listProduct.productInformation.modelNo,
					modelYear: listProduct.productInformation.modelYear,
					isCertified: listProduct.productInformation.isCertified,
					certificationName: listProduct.productInformation.certificationName,
					quantity: listProduct.productInformation.quantity,
					forBike: listProduct.productInformation.forBike,
					description: listProduct.productInformation.description,
				}}
				autoComplete="off"
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 20 }}
				labelAlign="left"
				onFinish={onFinish}
				// onValuesChange={handleFormValuesChange}
				// layout="vertical"
			>
				<Row gutter={[32, 0]}>
					<Col md={24}>
						<Form.Item name="title" label="Title" rules={[{ required: true, message: 'Required' }]}>
							<Input placeholder="Your product title" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="price" label="Price" rules={[{ required: true, message: 'Required' }]}>
							<Input placeholder="Your product price" type="number" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Required' }]}>
							<Input type="number" placeholder="Enter Total quantity" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="category" label="Category" rules={[{ required: true, message: 'Required' }]}>
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
						<Form.Item name="inStock" label="Availablity" rules={[{ required: true, message: 'Required' }]}>
							<Radio.Group>
								<Radio value>In-Stock</Radio>
								<Radio value={false}>Out of Stock</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="warranty" label="Warranty">
							<Input placeholder="Warranty" type="number" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="warrantyUnit" label="Warranty Unit">
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
					<Col md={24}>
						<Form.Item name="brand" label="Brand">
							<Input placeholder="Enter product brand" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="madeIn" label="Made In">
							<Input placeholder="Enter brand origin" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="modelNo" label="Model No">
							<Input placeholder="Enter model no" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="modelYear" label="Model Year">
							<Input placeholder="Enter model year" type="number" onWheel={(e: any) => e.target.blur()} />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="isCertified" label="Is Certified">
							<Radio.Group>
								<Radio value>Yes</Radio>
								<Radio value={false}>No</Radio>
							</Radio.Group>
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="certificationName" label="Certification Name">
							<Input placeholder="Enter Certification name" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="forBike" label="For Bike">
							<Input placeholder="Enter motorcycle name" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Form.Item name="description" label="Description">
							<Input.TextArea rows={5} cols={8} placeholder="Enter Description" />
						</Form.Item>
					</Col>
					<Col md={24}>
						<Button type="primary" htmlType="submit" block>
							Save & Next
						</Button>
					</Col>
				</Row>
			</Form>
		</Space>
	);
}
