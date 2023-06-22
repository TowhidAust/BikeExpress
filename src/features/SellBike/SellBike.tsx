/* eslint-disable no-restricted-syntax */
import { Button, Card, Col, Form, Input, Row, Select, Typography, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '@/components/Layout/AppLayout';
import {
	ACCIDENT_HISTORY,
	BIKELIST,
	BIKE_MODEL_YEAR,
	DISTRICTS,
	DIVISIONS,
	DURATION_OF_REGISTRATION,
	OWNERSHIP_STATUS,
	YEAR_OF_REGISTRATION,
	ZONE_OF_REGISTRATION,
} from '@/constants';
import { useSellBikeMutationMutation, useUploadImageMutation } from './api';
import { RootState } from '@/redux/store';

export default function SellBike() {
	const [selectedDivision, setSelectedDivision] = useState<any[]>();
	const [fileList, setFileList] = useState<any[]>([]);
	const [images, setImageList] = useState<any[]>([]);
	const { auth } = useSelector((state: RootState) => state);

	const [form] = Form.useForm();
	const [sellBikeMutation, { isLoading: isSellBikeLoading }] = useSellBikeMutationMutation();
	const [uploadImageMutation, { isLoading: isUploadLoading }] = useUploadImageMutation();

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}
	};

	const onPreview = async (file: UploadFile) => {
		let src = file.url as string;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj as RcFile);
				reader.onload = () => resolve(reader.result as string);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow?.document.write(image.outerHTML);
	};

	const onRemove = (e: any) => {
		const filesAfterRemove = fileList.filter((item) => item?.uid !== e?.uid);
		setFileList(filesAfterRemove);

		// images.filter((item, indx) => indx + 1 !== index);
		const imagesAfterRemove = images.filter((item) => item?.uid !== e?.uid);
		setImageList(imagesAfterRemove);
	};
	const beforeUpload = (file: any) => {
		const fileName = file?.name;
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setFileList((prev) => [...prev, { url: reader.result, fileName, uid: file.uid }]);
			setImageList((prev) => [...prev, file]);
		};

		// then upload `file` from the argument manually
		return false;
	};

	const onFinish = async (value: any) => {
		// eslint-disable-next-line no-console
		console.log(value);
		// eslint-disable-next-line no-console
		console.log(images);

		const formData = new FormData();
		for (let i in images) {
			const singleImage = images[i];
			formData.append('images', singleImage);
		}

		if (auth?.user?.id) {
			uploadImageMutation({
				userId: auth?.user?.id,
				file: formData,
			})
				.unwrap()
				.then((result) => {
					message.success(result?.message || 'Image upload success');
					const finalValue = {
						userId: auth?.user?.id,
						images: result?.result,
						bikeCode: value?.bikeName,
						registrationZone: value?.registrationZone,
						yearOfRegistration: value?.yearOfRegistration,
						kmRun: value?.kmRun,
						durationOfRegistration: value?.durationOfRegistration,
						bikeModelYear: value?.bikeModelYear,
						isAccidentHistory: value?.isAccidentHistory,
						ownerShipStatus: value?.ownerShipStatus,
						division: value?.division,
						phone: value?.phone,
						address: value?.address,
						detailDescription: value?.detailDescription,
						district: value?.district,
						price: value?.price,
					};
					sellBikeMutation(finalValue)
						.unwrap()
						.then((res) => {
							message.success(res?.message);
						})
						.catch((err) => {
							message.error(err?.data?.message);
						});
				})
				.catch((err) => {
					message.error(err?.data?.message || 'Image upload failed!');
				});
		} else {
			message.warning('Please login first');
		}
	};

	return (
		<AppLayout>
			<section>
				<Row gutter={[8, 8]}>
					<Col sm={24} md={24}>
						<Card title="Fill This Form">
							<Form
								form={form}
								name="basic"
								initialValues={{ remember: true }}
								onFinish={onFinish}
								autoComplete="off"
								size="large"
								onValuesChange={handleFormValuesChange}
								labelCol={{ span: 8 }}
								wrapperCol={{ span: 16 }}
								// layout="vertical"
								labelAlign="left"
							>
								<Row gutter={24}>
									<Col sm={24} md={12}>
										<Typography.Title level={5} className="primary-font-color">
											Step1: Bike Information
										</Typography.Title>
										<Form.Item
											label="Select Bike"
											name="bikeName"
											rules={[
												{
													required: true,
													message: 'Please input your bike brand!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select your bike"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={BIKELIST}
											/>
										</Form.Item>
										<Form.Item
											label="Registration Zone"
											name="registrationZone"
											rules={[
												{
													required: true,
													message: 'Please input your bike registration zone!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select your bike registration zone"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={ZONE_OF_REGISTRATION}
											/>
										</Form.Item>
										<Form.Item
											label="Registration Year"
											name="yearOfRegistration"
											rules={[
												{
													required: true,
													message: 'Please input your yearOfRegistration!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select Year of Registration"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={YEAR_OF_REGISTRATION}
											/>
										</Form.Item>
										<Form.Item
											name="kmRun"
											label="Km Run"
											rules={[
												{
													required: true,
													message: 'Please input total kilometer run of your bike!',
												},
											]}
										>
											<Input type="number" placeholder="Total Kilometer run of your bike" />
										</Form.Item>
										<Form.Item
											label="Tax Token"
											name="durationOfRegistration"
											rules={[
												{
													required: true,
													message: 'Please input duration of registration!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select duration of registration"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={DURATION_OF_REGISTRATION}
											/>
										</Form.Item>
										<Form.Item
											label="Bike Model Year"
											name="bikeModelYear"
											rules={[
												{
													required: true,
													message: 'Please input bike model year!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select bike model year"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={BIKE_MODEL_YEAR}
											/>
										</Form.Item>
										<Form.Item
											label="Accident History"
											name="isAccidentHistory"
											rules={[
												{
													required: true,
													message: 'Please input bike ownership status!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Does your bike have accident history?"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={ACCIDENT_HISTORY}
											/>
										</Form.Item>
										<Form.Item
											label="Ownership"
											name="ownerShipStatus"
											rules={[
												{
													required: true,
													message: 'Please input bike ownership status!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select bike ownership status"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={OWNERSHIP_STATUS}
											/>
										</Form.Item>
									</Col>
									<Col sm={24} md={12}>
										<Typography.Title level={5} className="primary-font-color">
											Step2: Personal Information
										</Typography.Title>
										<Form.Item
											label="Division"
											name="division"
											rules={[
												{
													required: true,
													message: 'Please input your division!',
												},
											]}
										>
											<Select
												showSearch
												placeholder="Select your division"
												optionFilterProp="children"
												filterOption={(input, option) =>
													(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
												}
												options={DIVISIONS}
											/>
										</Form.Item>

										{selectedDivision && (
											<Form.Item
												label="District"
												name="district"
												rules={[
													{
														required: true,
														message: 'Please input your district!',
													},
												]}
											>
												<Select
													showSearch
													placeholder="Select your district"
													optionFilterProp="children"
													filterOption={(input, option) =>
														(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
													}
													options={selectedDivision}
												/>
											</Form.Item>
										)}
										<Form.Item
											label="Phone"
											name="phone"
											rules={[
												{
													required: true,
													message: 'Please input your phone number',
												},
											]}
										>
											<Input placeholder="Phone number" type="text" />
										</Form.Item>
										<Form.Item
											label="Address"
											name="address"
											rules={[
												{
													required: true,
													message: 'Please input address!',
												},
											]}
										>
											<Input placeholder="Your address" type="text" />
										</Form.Item>

										<Typography.Title level={5} className="primary-font-color">
											Step3: Write detail description of your bike
										</Typography.Title>
										<Form.Item
											label="Description"
											name="detailDescription"
											rules={[
												{
													required: true,
													message: 'Please input details about your bike!',
												},
											]}
										>
											<Input.TextArea placeholder="Description" rows={2} />
										</Form.Item>

										<Form.Item
											label="Price"
											name="price"
											rules={[
												{
													required: true,
													message: 'Please input price!',
												},
											]}
										>
											<Input placeholder="Price" type="number" />
										</Form.Item>

										<Typography.Title level={5} className="primary-font-color">
											Step4: Upload Image
										</Typography.Title>
										<Form.Item label="Upload Image">
											<ImgCrop rotationSlider aspect={1.5} cropShape="rect">
												<Upload
													beforeUpload={beforeUpload}
													name="fileList"
													listType="picture-card"
													fileList={fileList}
													onPreview={onPreview}
													onRemove={onRemove}
												>
													{fileList.length < 5 && '+ Upload'}
												</Upload>
											</ImgCrop>
										</Form.Item>
									</Col>
								</Row>

								<Button type="primary" htmlType="submit" block loading={isUploadLoading || isSellBikeLoading}>
									Submit
								</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</section>
		</AppLayout>
	);
}
