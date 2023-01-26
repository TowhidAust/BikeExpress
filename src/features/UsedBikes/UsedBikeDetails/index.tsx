import {
	Button,
	Card,
	Col,
	Divider,
	Image,
	Row,
	Table,
	Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import AppLayout from '@/components/Layout/AppLayout';
import cafeRacer from '@/assets/cafeRacer.jpg';

interface DataType {
	key: string;
	title: string;
	value: string;
}

export default function UsedBikeDetails() {
	const columns: ColumnsType<DataType> = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Details',
			dataIndex: 'value',
			key: 'value',
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			title: 'NAME',
			value: 'Generic Cafe Racer',
		},
		{
			key: '2',
			title: 'MODEL',
			value: '2021',
		},
		{
			key: '3',
			title: 'CC',
			value: '160',
		},
		{
			key: '4',
			title: 'KILOMETER',
			value: '10300',
		},
		{
			key: '5',
			title: 'CONDITION',
			value: 'Used',
		},
		{
			key: '6',
			title: 'NEGOTIATE',
			value: 'Nagotiable',
		},
		{
			key: '7',
			title: 'Location',
			value: 'Dhka',
		},
		{
			key: '8',
			title: 'NUMBER PLATE',
			value: 'Jamalpur',
		},
	];

	return (
		<AppLayout>
			<Card>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={8}>
						<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
							<Image src={cafeRacer} />
						</Card>

						<Row>
							<Col md={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src={cafeRacer} />
								</Card>
							</Col>
							<Col md={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src={cafeRacer} />
								</Card>
							</Col>
							<Col md={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src={cafeRacer} />
								</Card>
							</Col>
							<Col md={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src={cafeRacer} />
								</Card>
							</Col>
						</Row>

						<Divider className="mt-3" />
						<Row>
							<Col xs={24} sm={24} md={24}>
								<Typography.Title className="m-0" level={3}>
									GENERIC CAFE RACER 165 ABS
								</Typography.Title>
								<Typography.Title className="m-0" type="warning" level={5}>
									BDT 250000
								</Typography.Title>
							</Col>

							{/* <Col xs={24} sm={24} md={12}>
								<Button block type="primary" size="large">
									Add to Compare
								</Button>
							</Col> */}
							<Col xs={24} sm={24} md={24}>
								<Button className="mt-3" block type="primary" size="large">
									RESERVE THIS BIKE
								</Button>
							</Col>
						</Row>
					</Col>

					<Col xs={24} sm={24} md={16}>
						<Table
							dataSource={data}
							columns={columns}
							pagination={false}
							bordered
						/>
					</Col>
				</Row>
			</Card>
		</AppLayout>
	);
}
