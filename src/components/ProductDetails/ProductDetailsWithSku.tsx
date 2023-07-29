import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Table, Typography, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { ProductDetailsDataModel, ProductVariantModel } from '@/models/ProductDetailsWithSkuModel';

export interface DataType {
	key: string;
	title?: string;
	value: string;
	dataIndex: string;
}

type PropTypes = {
	productDetailsData: ProductDetailsDataModel;
	variants: ProductVariantModel[];
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
		<section>
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
								<Typography.Title className="mt-2" level={5}>
									Delivery Info
								</Typography.Title>
								<Divider className="mt-0" />
								<ul>
									<li>Address: Mirpur-12, Block C, Road-12, House, 14</li>
									<li>Delivery within max 3 days</li>
									<li>Cash on Delivery Available</li>
								</ul>
							</Col>
						</Row>
					</Col>
					<Col md={16}>
						<Typography.Title className="m-0" level={2}>
							{productDetailsData?.title || 'N/A'}
						</Typography.Title>
						<Typography.Title level={4} className="m-0 primary-font-color">
							BDT {productPrice - (productPrice * discount) / 100}
						</Typography.Title>
						<Typography.Title className="m-0 font-weight-400" level={5} style={{ textDecoration: 'line-through' }}>
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
					</Col>
				</Row>
			</Card>
			<Card className="mt-3" title="Product Description">
				<Typography.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum dolores explicabo cupiditate inventore
					nemo quia magnam. Praesentium nobis a, provident facilis error modi iusto consequuntur aliquam dignissimos
					adipisci harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident eius quisquam
					sint qui eveniet possimus expedita laborum at suscipit aperiam ducimus sit labore accusamus ipsa consequatur
					libero, molestias sed vel totam maiores, blanditiis reprehenderit nostrum asperiores! Facere adipisci optio
					soluta ipsa necessitatibus voluptatibus! Optio aliquam corporis voluptate corrupti, suscipit libero culpa cum
					sed earum atque. Adipisci, atque officia corporis, delectus autem qui hic facilis pariatur alias nobis iste.
					Maiores nisi iure dolores autem? Hic facere quis suscipit natus inventore animi id placeat, omnis itaque
					numquam non, doloribus libero nemo incidunt veritatis in ullam distinctio iure architecto dicta officia
					laboriosam fuga illum. Eveniet doloremque adipisci veritatis illum inventore hic molestias voluptatum
					reprehenderit exercitationem ad quo aliquam, quos iusto corrupti atque perferendis a delectus dolorem, tempora
					vel quam recusandae deleniti quaerat pariatur. Quae repudiandae, harum nisi tempore laboriosam alias explicabo
					cumque at saepe et magnam molestiae corrupti. Repudiandae quam atque quo? Vero sit impedit eveniet atque
					dicta! Rem, eaque. Tempora molestias unde rem, quasi laudantium sint quia sit, dolores facilis in, earum
					nesciunt quisquam maxime. Laboriosam sapiente possimus ipsam adipisci sed deserunt veniam quibusdam! Dolorem
					perspiciatis blanditiis recusandae accusantium, nisi aut. Incidunt ipsam, laudantium ipsum neque doloremque
					iure nobis minus assumenda.
				</Typography.Text>
			</Card>
		</section>
	);
}
