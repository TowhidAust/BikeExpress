import { Card, Col, Row, Select, Typography } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';
import ProductCardBike from '@/components/ProductCard/ProductCardBike';
import cafeRacer from '@/assets/cafeRacer.jpg';

const { Option } = Select;
export default function UsedBikes() {
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<Card>
						<Typography.Title level={4}>Search Filter</Typography.Title>
						<Select
							className="width-100"
							showSearch
							placeholder="Select a city"
							optionFilterProp="children"
							// onChange={onChange}
							// onSearch={onSearch}
							filterOption={(input, option) =>
								(option!.children as unknown as string)
									.toLowerCase()
									.includes(input.toLowerCase())
							}
						>
							<Option value="dhaka">Dhaka</Option>
							<Option value="chittagong">Chittagong</Option>
							<Option value="rajshahi">Rajshahi</Option>
							<Option value="khulna">Khulna</Option>
							<Option value="barishal">Barishal</Option>
							<Option value="sylhet">Sylhet</Option>
						</Select>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={18}>
					<Card>
						<Typography.Title level={4}> Used Bikes </Typography.Title>
						<Row gutter={[16, 16]}>
							<Col xs={24} sm={24} md={12} lg={8} xxl={6}>
								<ProductCardBike
									// key={Math.random()}
									image={cafeRacer}
									title="HONDA CBR REPSOL 155 FI ABS"
									price={250000}
									isUsed
									model="2021"
									cc={150}
									km={1200}
									isFirstOwner
									location="Dhaka"
									isNegotiable
									onDetailsButtonClick={() => false}
								/>
							</Col>
							<Col xs={24} sm={24} md={12} lg={8} xxl={6}>
								<ProductCardBike
									// key={Math.random()}
									image={cafeRacer}
									title="HONDA CBR REPSOL 155 FI ABS"
									price={250000}
									isUsed
									model="2021"
									cc={150}
									km={1200}
									isFirstOwner
									location="Dhaka"
									isNegotiable
									onDetailsButtonClick={() => false}
								/>
							</Col>
							<Col xs={24} sm={24} md={12} lg={8} xxl={6}>
								<ProductCardBike
									// key={Math.random()}
									image={cafeRacer}
									title="HONDA CBR REPSOL 155 FI ABS"
									price={280000}
									isUsed
									model="2021"
									cc={150}
									km={1200}
									isFirstOwner
									location="Dhaka"
									isNegotiable
									onDetailsButtonClick={() => false}
								/>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	);
}
