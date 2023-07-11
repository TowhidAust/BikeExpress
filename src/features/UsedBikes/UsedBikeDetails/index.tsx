import { Button, Card, Col, Image, Row, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useParams } from 'react-router-dom';
import AppLayout from '@/components/Layout/AppLayout';
import { useBikeDetailsQuery } from '../api';

interface DataType {
	key: string;
	title: string;
	value: string;
}

export default function UsedBikeDetails() {
	const { id } = useParams();
	const {
		data: bikeDetailsData,
		isLoading,
		isError,
	} = useBikeDetailsQuery({
		bikeId: id,
	});

	const columns: ColumnsType<DataType> = [
		{
			title: 'Brand',
			dataIndex: 'bikeBrand',
			key: '2',
		},
		{
			title: 'Model Year',
			dataIndex: 'bikeModelYear',
			key: '3',
		},
		{
			title: 'CC',
			dataIndex: 'cc',
			key: '4',
		},
		{
			title: 'KM',
			dataIndex: 'kmRun',
			key: '5',
		},
		{
			title: 'Registration Duration',
			dataIndex: 'durationOfRegistration',
			key: '6',
			render: (text) => (text !== 'expired' ? `${text} Years` : 'Expired'),
		},

		{
			title: 'Ownership',
			dataIndex: 'ownerShipStatus',
			key: '7',
			render: (text) => `${text} Owner`,
		},
		{
			title: 'Registration Zone',
			dataIndex: 'registrationZone',
			key: '7',
		},
	];

	const data = [bikeDetailsData?.result];

	if (isError) {
		<AppLayout>Something went wrong!</AppLayout>;
	}
	return (
		<AppLayout>
			<Card loading={isLoading}>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={8}>
						<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
							<Image src={bikeDetailsData?.result?.images[0]} />
						</Card>

						<Row>
							{bikeDetailsData?.result?.images.map((item: any) => {
								return (
									<Col span={6} key={item}>
										<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
											<Image src={item} />
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>

					<Col xs={24} sm={24} md={16}>
						<Typography.Title className="m-0" level={2}>
							{bikeDetailsData?.result?.bikeName}
						</Typography.Title>

						<Typography.Text>
							{bikeDetailsData?.result?.isNegotiable ? 'The price is Negotiable' : 'The price is Fixed'} |{' '}
							{bikeDetailsData?.result?.isAccidentHistory ? 'Has Accident History' : 'No Accident History'}
						</Typography.Text>
						<Typography.Title className="m-0 primary-font-color" level={5}>
							BDT {bikeDetailsData?.result?.price}
						</Typography.Title>
						<br />
						<Table
							scroll={{ x: true }}
							rowKey={(record: any) => record?._id}
							dataSource={data}
							columns={columns}
							pagination={false}
							bordered
						/>
						<br />
						<Typography.Text>{bikeDetailsData?.result?.detailDescription}</Typography.Text>
						<br />
						<br />
						<Button block type="primary" size="large">
							SELLER INFORMATION
						</Button>
					</Col>
				</Row>
			</Card>
		</AppLayout>
	);
}
