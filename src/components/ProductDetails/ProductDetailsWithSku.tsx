import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Image, Row, Table, Typography, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductDetailsDataModel, ProductVariantModel } from '@/models/ProductDetailsWithSkuModel';
import { RootState } from '@/redux/store';
import BasicModal from '../Modals/BasicModal';
import LoginForm from '@/features/Auth/LoginForm';
import { PRIVATE_ROUTE } from '@/router/appRoutes';
import { setOrderSummary } from '@/redux/orderSummarySlice';
import { BlackButtonContainer } from '@/styles/styled/BlackButtonContainer';

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
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
	const { auth } = useSelector((state: RootState) => state);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!productDetailsData?.hasSku) {
			setAvailableQuantity(productDetailsData?.quantity);
		}

		if (productDetailsData?.hasSku && variants) {
			const defaultVariantPrice = variants[0]?.price;
			const defaultDiscount = variants[0]?.discount;
			const defaultColorId = variants[0]?._id;
			const defaultSizes = variants[0]?.sizes || [];
			setProductPrice(defaultVariantPrice);
			setDiscount(defaultDiscount);
			setSelectedColorFamilyId(defaultColorId);
			setAvailableSizes(defaultSizes);
		}
	}, [productDetailsData?.hasSku, variants, productDetailsData?.quantity]);

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
		if (productDetailsData?.hasSku && !selectedColorFamilyId) {
			message.warning('Please select a color');
			return false;
		}

		if (productDetailsData?.hasSku && !selectedSizeId) {
			message.warning('Please select a size');
			return false;
		}

		if (count < 1) {
			message.warning('Quantity is not selected');
			return false;
		}

		if (availableQuantity < count) {
			message.warning(`You can select maximum quantity of ${availableQuantity}.`);
			return false;
		}

		if (auth?.user?.id) {
			const indexOfVariant = variants.findIndex((object) => object._id === selectedColorFamilyId);
			const indexOfSize = variants[indexOfVariant].sizes.findIndex((object) => object._id === selectedSizeId);

			const finalData: any = {
				userId: auth?.user?.id,
				productId: productDetailsData?._id,
				variantId: selectedColorFamilyId,
				sizeId: selectedSizeId,
				hasSku: productDetailsData?.hasSku,
				productTitle: productDetailsData?.title,
				price: variants[indexOfVariant]?.price || productDetailsData?.price || null,
				discount: variants[indexOfVariant]?.discount || productDetailsData?.discount || null,
				size: variants[indexOfVariant].sizes[indexOfSize].size || null,
				quantity: count,
			};

			if (!productDetailsData?.hasSku) {
				delete finalData.variantId;
				delete finalData.sizeId;
				delete finalData.size;
			}

			// eslint-disable-next-line no-console
			console.log(finalData);
			dispatch(setOrderSummary(finalData));
			navigate(PRIVATE_ROUTE.CHECKOUT);
		} else {
			setIsLoginModalOpen(!isLoginModalOpen);
			message.warning('Please login first');
		}
		return false;
	};

	return (
		<section>
			<Card>
				<Row gutter={[16, 16]}>
					<Col md={8}>
						<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
							<Image src={productDetailsData?.thumbnail} />
						</Card>
						<Row>
							{productDetailsData?.images?.map((image: any) => {
								return (
									<Col span={6} key={image?.imagePath}>
										<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
											<Image src={image?.downloadUrl || image} />
										</Card>
									</Col>
								);
							})}
						</Row>
					</Col>
					<Col md={16}>
						<Typography.Title className="mt mb-0" level={3}>
							{productDetailsData?.title || 'N/A'}
						</Typography.Title>
						<Typography.Title level={5} className="m-0 primary-font-color">
							BDT {productPrice - (productPrice * discount) / 100}
						</Typography.Title>
						<Typography.Text className="m-0 p-0" type="secondary" style={{ textDecoration: 'line-through' }}>
							BDT {productPrice}
						</Typography.Text>
						<Divider />
						<Table
							scroll={{ x: true }}
							columns={column}
							dataSource={[productDetailsData]}
							pagination={false}
							bordered
							rowKey={(record: any) => record?._id}
						/>
						<Row className="mt-2" gutter={[32, 8]}>
							{productDetailsData?.hasSku && (
								<>
									<Col xs={24} sm={24} md={24}>
										<Row gutter={[8, 8]}>
											<Col xs={24} sm={24} md={24}>
												<Typography.Title className="primary-font-color m-0 font-weight-400" level={5}>
													Color Family
												</Typography.Title>
											</Col>

											{variants?.map((item: any) => {
												return (
													<Col xs={24} sm={24} md={4} key={item?._id}>
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
									<Col xs={24} sm={24} md={24}>
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
																<Col xs={24} sm={24} md={4} key={size?._id}>
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
															<Col xs={24} sm={24} md={4} key={size?._id}>
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
								</>
							)}

							<Col xs={24} sm={24} md={12}>
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
							<Col xs={24} sm={24} md={12}>
								<Typography.Title className="m-0 font-weight-400 primary-font-color" level={5}>
									Warranty & Return
								</Typography.Title>
								<ul className="pl-3">
									<li>
										{productDetailsData?.warranty} {productDetailsData?.warrantyUnit} service waranty{' '}
									</li>
									{productDetailsData?.certificationName && (
										<li> {productDetailsData?.certificationName} Certified </li>
									)}
									<li> 7 days return (Change of mind is not applicable) </li>
								</ul>
							</Col>
							<Col span={24}>
								<Row className="mt-2" gutter={[8, 8]}>
									<Col span={12}>
										<Button size="large" block type="primary" onClick={addToCartClickHandler}>
											ADD TO CART
										</Button>
									</Col>
									<Col span={12}>
										<BlackButtonContainer>
											<Button size="large" block type="primary" onClick={buyNowClickHandler}>
												BUY NOW
											</Button>
										</BlackButtonContainer>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
			<Card className="mt-3" title="Product Description">
				<Typography.Text>{productDetailsData?.description || 'No Description Provided'}</Typography.Text>
			</Card>

			<BasicModal
				isOpen={isLoginModalOpen}
				handleCancel={() => setIsLoginModalOpen(false)}
				handleOk={() => setIsLoginModalOpen(false)}
				modalBody={<LoginForm setIsModalOpen={setIsLoginModalOpen} />}
				title="Please login"
				isFooter={false}
			/>
		</section>
	);
}
