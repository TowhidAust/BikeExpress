import { Button, Card, Col, Divider, Image, Row, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import AppLayout from '@/components/Layout/AppLayout';

interface DataType {
	key: string;
	title?: string;
	value: string;
	dataIndex: string;
}

export default function HelmetDetails() {
	const column: ColumnsType<DataType> = [
		{
			key: '1',
			title: 'Brand',
			dataIndex: 'brand',
		},
		{
			key: '2',
			title: 'ModelNo',
			dataIndex: 'modelNo',
		},
		{
			key: '3',
			title: 'Model Year',
			dataIndex: 'modelYear',
		},
		{
			key: '4',
			title: 'Made In',
			dataIndex: 'madeIn',
		},
		// {
		// 	key: '5',
		// 	title: 'Available Quantity',
		// 	dataIndex: 'quantity',
		// },
	];
	const data: any[] = [{ brand: 'MT', modelNo: 'MT003', modelYear: '2023', madeIn: 'Indonesia' }];

	return (
		<AppLayout>
			<Card>
				<Row gutter={[16, 16]}>
					<Col md={8}>
						<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
							<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
						</Card>

						<Row>
							<Col span={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
								</Card>
							</Col>
							<Col span={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
								</Card>
							</Col>

							<Col span={24}>
								<Row className="mt-2" gutter={[8, 8]}>
									<Col span={12}>
										<Button size="large" block type="ghost">
											ADD TO CART
										</Button>
									</Col>
									<Col span={12}>
										<Button size="large" block type="primary">
											BUY NOW
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col md={16}>
						<Typography.Title className="m-0" level={2}>
							MT Targo Pro H450
						</Typography.Title>
						<Typography.Title level={4} className="m-0 primary-font-color">
							BDT 7800
						</Typography.Title>
						<Divider className="mt-2 mb-3" />
						<Table scroll={{ x: true }} columns={column} dataSource={data} pagination={false} bordered />
						<br />
						<Row gutter={[8, 8]}>
							<Col xs={24} sm={24} md={24}>
								<Typography.Title className="primary-font-color m-0 font-weight-400" level={5}>
									Color Family
								</Typography.Title>
							</Col>
							<Col xs={24} sm={24} md={4}>
								<Button block type="dashed">
									RED
								</Button>
							</Col>
							<Col xs={24} sm={24} md={4}>
								<Button block type="dashed">
									GREEN
								</Button>
							</Col>
							<Col xs={24} sm={24} md={4}>
								<Button block type="dashed">
									BLUE
								</Button>
							</Col>
						</Row>
						<br />

						<Typography.Title level={5} className="primary-font-color font-weight-500">
							Description
						</Typography.Title>
						<Typography.Text type="secondary">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptatem perferendis voluptates
							dolore reiciendis, culpa molestias ratione aperiam nulla odio tempore dolorum aliquam quae modi iure
							aspernatur blanditiis a ex! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, aliquam
							perspiciatis accusantium fuga eum dignissimos reprehenderit modi natus totam voluptas nam incidunt debitis
							libero rerum earum ratione harum perferendis id.
						</Typography.Text>
					</Col>
				</Row>
			</Card>
		</AppLayout>
	);
}
