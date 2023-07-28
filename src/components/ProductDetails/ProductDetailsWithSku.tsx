import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Table, Tabs, Typography, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';

export interface DataType {
	key: string;
	title?: string;
	value: string;
	dataIndex: string;
}

export interface ColorFieldTypes {
	colorFieldId: string;
	isActive: boolean;
}

type PropTypes = {
	productDetailsData: {
		_id: string;
		title: string;
		brand: string;
		modelNo: string;
		modelYear: string;
		madeIn: string;
		thumnail: string;
		images: string[];
	};
	variants: {
		_id: string;
		price: number;
		discount: number;
		color: string;
		sizes: {
			_id: string;
			size: string;
			inStock: boolean;
			quantity: number;
		}[];
	}[];
};

export default function ProductDetailsWithSku(props: PropTypes) {
	const { productDetailsData, variants } = props;
	const [selectedColorFamilyId, setSelectedColorFamilyId] = useState<string>();
	const [selectedSizeId, setSelectedSizeId] = useState<string>();
	const [availableSizes, setAvailableSizes] = useState<any[]>([]);
	const [productPrice, setProductPrice] = useState<number>(0);
	const [discount, setDiscount] = useState<number>(0);
	const [availableQuantity, setAvailableQuantity] = useState<number>(0);
	const [count, setCount] = useState<number>(0);

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
	];

	const data: any[] = [
		{
			_id: '1',
			brand: productDetailsData?.brand || 'N/A',
			modelNo: productDetailsData?.modelNo || 'N/A',
			modelYear: productDetailsData?.modelYear || 'N/A',
			madeIn: productDetailsData?.madeIn || 'N/A',
		},
	];

	const handleColorFamilyClick = (colorFieldId: string) => {
		setSelectedColorFamilyId(colorFieldId);
		variants?.find((item: any) => {
			const id = item?._id;
			const price = item?.price;
			const sizes = item?.sizes;
			if (id === colorFieldId) {
				setProductPrice(price);
				setAvailableSizes(sizes);
				setSelectedSizeId(undefined);
				setAvailableQuantity(0);
			}
			return false;
		});
	};

	const handleSizeCardClick = (sizeFieldId: string, quantity: number) => {
		setSelectedSizeId(sizeFieldId);
		setAvailableQuantity(quantity);
	};

	const minusClickHandler = () => {
		setCount((prevCount: any) => {
			if (prevCount !== 0) {
				return prevCount - 1;
			}
			return 0;
		});
	};

	const plusClickHandler = () => {
		setCount(count + 1);
	};

	const addToCartClickHandler = () => {
		// TODO need work here
	};

	const buyNowClickHandler = () => {
		if (!selectedColorFamilyId) {
			message.warning('Please select a color');
			return false;
		}
		if (!selectedSizeId) {
			message.warning('Please select a size');
			return false;
		}

		if (count < 1) {
			message.warning('Quantity is not selected');
		}

		if (availableQuantity < count) {
			message.warning(`You can select maximum quantity of ${availableQuantity}.`);
			return false;
		}

		const finalData = {
			productId: productDetailsData?._id,
			skuId: selectedColorFamilyId,
			selectedSizeId,
		};
		// eslint-disable-next-line no-console
		console.log(finalData);

		return false;
	};

	useEffect(() => {
		if (variants) {
			const defaultVariantPrice = variants[0]?.price;
			const defaultDiscount = variants[0]?.discount;
			setProductPrice(defaultVariantPrice);
			setDiscount(defaultDiscount);
		}
	}, [variants]);

	return (
		<Card>
			<Row gutter={[16, 16]}>
				<Col md={8}>
					<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
						<Image src={productDetailsData?.thumnail} />
					</Card>
					<Row>
						{productDetailsData?.images?.map((image: any) => {
							return (
								<Col span={6} key={image}>
									<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
										<Image src={image} />
									</Card>
								</Col>
							);
						})}

						<Col span={24}>
							<Row className="mt-2" gutter={[8, 8]}>
								<Col span={12}>
									<Button size="large" block type="ghost" onClick={addToCartClickHandler}>
										ADD TO CART
									</Button>
								</Col>
								<Col span={12}>
									<Button size="large" block type="primary" onClick={buyNowClickHandler}>
										BUY NOW
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col md={16}>
					<Tabs
						size="large"
						defaultActiveKey="1"
						items={[
							{
								label: 'Details',
								key: '1',
								children: (
									<>
										<Typography.Title className="m-0" level={2}>
											{productDetailsData?.title || 'N/A'}
										</Typography.Title>
										<Typography.Title level={4} className="m-0 primary-font-color">
											BDT {productPrice - (productPrice * discount) / 100}
										</Typography.Title>
										<Typography.Title
											className="m-0 font-weight-400"
											level={5}
											style={{ textDecoration: 'line-through' }}
										>
											BDT {productPrice}
										</Typography.Title>
										<Divider className="mt-2 mb-3" />
										<Table
											scroll={{ x: true }}
											columns={column}
											dataSource={data}
											pagination={false}
											bordered
											rowKey={(record: any) => record?._id}
										/>
										<Row className="mt-2" gutter={[32, 8]}>
											<Col xs={24} sm={24} md={12}>
												<Row gutter={[8, 8]}>
													<Col xs={24} sm={24} md={24}>
														<Typography.Title className="primary-font-color m-0 font-weight-400" level={5}>
															Color Family
														</Typography.Title>
													</Col>

													{variants?.map((item: any) => {
														return (
															<Col xs={24} sm={24} md={8} key={item?._id}>
																<Card
																	className={selectedColorFamilyId === item?._id ? 'third-bg' : ''}
																	hoverable
																	bodyStyle={{ padding: 10, textAlign: 'center', fontSize: '10px' }}
																	onClick={() => {
																		handleColorFamilyClick(item?._id);
																	}}
																>
																	{item?.color || 'N/A'}
																</Card>
															</Col>
														);
													})}
												</Row>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Row gutter={[8, 8]}>
													{availableSizes?.length > 0 && (
														<>
															<Col xs={24} sm={24} md={24}>
																<Typography.Title className="primary-font-color m-0 font-weight-400" level={5}>
																	Size
																</Typography.Title>
															</Col>
															{availableSizes?.map((size: any) => {
																if (size?.quantity === 0 || !size?.inStock) {
																	return (
																		<Col xs={24} sm={24} md={8} key={size?._id}>
																			<Card
																				hoverable
																				bodyStyle={{
																					padding: 10,
																					textAlign: 'center',
																					fontSize: '10px',
																					color: '#ddd',
																				}}
																				onClick={() => {
																					message.warn('This size is out of stock!');
																				}}
																			>
																				{size?.size || 'N/A'}
																			</Card>
																		</Col>
																	);
																}
																return (
																	<Col xs={24} sm={24} md={8} key={size?._id}>
																		<Card
																			className={selectedSizeId === size?._id ? 'third-bg' : ''}
																			hoverable
																			bodyStyle={{ padding: 10, textAlign: 'center', fontSize: '10px' }}
																			onClick={() => {
																				handleSizeCardClick(size?._id, size?.quantity);
																			}}
																		>
																			{size?.size || 'N/A'}
																		</Card>
																	</Col>
																);
															})}
														</>
													)}
												</Row>
											</Col>
											<Col xs={24} sm={24} md={24}>
												<Typography.Title className="primary-font-color font-weight-400" level={5}>
													Quantity
												</Typography.Title>

												<Card
													style={{ width: '120px' }}
													bodyStyle={{ padding: 10, textAlign: 'center', fontSize: '10px', color: '#ddd' }}
												>
													<section
														style={{
															display: 'flex',
															justifyContent: 'space-around',
															alignItems: 'center',
														}}
													>
														<Button type="link" icon={<MinusCircleOutlined />} onClick={minusClickHandler} />
														<Typography.Title className="m-0" level={5}>
															{count}
														</Typography.Title>
														<Button type="link" icon={<PlusCircleOutlined />} onClick={plusClickHandler} />
													</section>
												</Card>
											</Col>
											<Col span={24}>
												<Row className="mt-2" gutter={[8, 8]}>
													<Col span={12}>
														<Button size="large" block type="ghost" onClick={addToCartClickHandler}>
															ADD TO CART
														</Button>
													</Col>
													<Col span={12}>
														<Button size="large" block type="primary" onClick={buyNowClickHandler}>
															BUY NOW
														</Button>
													</Col>
												</Row>
											</Col>
										</Row>
									</>
								),
							},
							{
								label: 'Description',
								key: '2',
								children: (
									<section className="mt-2">
										<Typography.Text type="secondary">
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptatem perferendis
											voluptates dolore reiciendis, culpa molestias ratione aperiam nulla odio tempore dolorum aliquam
											quae modi iure aspernatur blanditiis a ex! Lorem ipsum dolor sit amet consectetur, adipisicing
											elit. Sapiente, aliquam perspiciatis accusantium fuga eum dignissimos reprehenderit modi natus
											totam voluptas nam incidunt debitis libero rerum earum ratione harum perferendis id. Lorem ipsum
											dolor sit amet consectetur adipisicing elit. Unde veritatis ex ipsa eveniet iusto hic cupiditate
											dicta, accusamus modi animi facere odio perferendis officiis reiciendis harum nam omnis corrupti
											voluptatem eius excepturi fugiat saepe labore. Laborum voluptate molestias fuga error quas? Ipsum
											iusto commodi sequi veniam consequatur, eligendi reprehenderit eaque unde iste, aperiam debitis!
											Harum neque necessitatibus aperiam temporibus assumenda sunt sint, sit officia blanditiis rem
											molestias in explicabo esse nemo inventore enim dolorem velit a fugit aut, voluptas alias quod
											excepturi! Nihil placeat maxime error, id illum officiis? Optio perspiciatis recusandae quia ea
											sit temporibus itaque corrupti nobis atque? Lorem ipsum dolor sit amet consectetur adipisicing
											elit. Possimus voluptas et maxime in, minima atque amet eius laboriosam debitis blanditiis dolorem
											excepturi architecto illo soluta doloremque sapiente! Consequatur, expedita repellat!
										</Typography.Text>
									</section>
								),
							},
							{
								label: 'Delivery Info',
								key: '3',
								children: 'Delivery within 3 days.',
							},
						]}
					/>
				</Col>
			</Row>
		</Card>
	);
}
