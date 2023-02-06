import { Card, Col, Pagination, Row, Select, Slider, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/Layout/AppLayout';
import ProductCardBike from '@/components/ProductCard/ProductCardBike';
import cafeRacer from '@/assets/cafeRacer.jpg';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

const { Option } = Select;
export default function UsedBikes() {
	const navigate = useNavigate();
	return (
		<AppLayout>
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={24} md={6}>
					<Card>
						<Row gutter={8}>
							<Typography.Title level={4}>Search Filter</Typography.Title>
							<Col lg={24}>
								<Select
									className="width-100"
									showSearch
									placeholder="Select a city"
									optionFilterProp="children"
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
							</Col>
							<Col lg={24}>
								<br />
								<Typography.Text type="secondary">Kilometer</Typography.Text>
								<Slider range defaultValue={[20, 50]} />
							</Col>
						</Row>
					</Card>
				</Col>
				<Col xs={24} sm={24} md={18}>
					<Card>
						<Typography.Title level={4}> Used Bikes </Typography.Title>
						<Row gutter={[16, 16]}>
							<Col xs={24} sm={24} md={12} lg={8} xxl={8}>
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
									onDetailsButtonClick={() => {
										return navigate(`${PUBLIC_ROUTE.USED_BIKE_DETAILS}/1234`);
									}}
								/>
							</Col>
							<Col xs={24} sm={24} md={12} lg={8} xxl={8}>
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
							<Col xs={24} sm={24} md={12} lg={8} xxl={8}>
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

						<div className="mt-3 text-right">
							<Pagination total={100} current={1} onChange={() => true} />
						</div>
					</Card>
				</Col>
			</Row>
		</AppLayout>
	);
}
