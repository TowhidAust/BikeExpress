import {
	Button,
	Card,
	Col,
	Form,
	Input,
	Radio,
	Row,
	Select,
	Typography,
	Upload,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import {
	BIKELIST,
	BIKE_MODEL_YEAR,
	DISTRICTS,
	DIVISIONS,
	DURATION_OF_REGISTRATION,
	OWNERSHIP_STATUS,
	YEAR_OF_REGISTRATION,
	ZONE_OF_REGISTRATION,
} from '@/constants';

export default function SellBike() {
	const [selectedDivision, setSelectedDivision] = useState<any[]>();
	const [fileList, setFileList] = useState<UploadFile[]>([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]);

	const [form] = Form.useForm();

	const handleFormValuesChange = (value: any) => {
		if (value?.division) {
			form.resetFields(['district']);
			setSelectedDivision(DISTRICTS[value?.division as keyof typeof DISTRICTS]);
		}
	};

	const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
		setFileList(newFileList);
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

	const onFinish = (value: any) => {
		// eslint-disable-next-line no-console
		console.log(value);
	};

	return (
		<AppLayout>
			<section>
				<Row gutter={[8, 8]}>
					<Col sm={24} md={24}>
						<Card title="Fill This Form">
							<Typography.Text type="secondary" strong>
								Please take some time before filling this form. Take some
								pictures of your bike from front-view, side-view, back-view,
								close-view. And then come back here to fill this form. It may
								take some time to fill this form. Also, Please keep your bike
								details, papers beside you so that you can fill the form
								quickly. Please keep patience and fill this form carefully.
							</Typography.Text>
							<br /> <br />
							<Form
								form={form}
								name="basic"
								initialValues={{ remember: true }}
								onFinish={onFinish}
								autoComplete="off"
								size="large"
								onValuesChange={handleFormValuesChange}
							>
								<Typography.Title level={5}>
									Personal Information
								</Typography.Title>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={DIVISIONS}
									/>
								</Form.Item>

								{selectedDivision && (
									<Form.Item
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
												(option?.label ?? '')
													.toLowerCase()
													.includes(input.toLowerCase())
											}
											options={selectedDivision}
										/>
									</Form.Item>
								)}
								<Form.Item
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

								<Typography.Title level={5}>Bike Information</Typography.Title>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKELIST}
									/>
								</Form.Item>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={ZONE_OF_REGISTRATION}
									/>
								</Form.Item>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={YEAR_OF_REGISTRATION}
									/>
								</Form.Item>
								<Form.Item
									name="kmRun"
									rules={[
										{
											required: true,
											message: 'Please input your bike milage!',
										},
									]}
								>
									<Input
										type="text"
										placeholder="Please input your bike milage"
									/>
								</Form.Item>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={DURATION_OF_REGISTRATION}
									/>
								</Form.Item>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={BIKE_MODEL_YEAR}
									/>
								</Form.Item>
								<Form.Item
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
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										options={OWNERSHIP_STATUS}
									/>
								</Form.Item>
								<Form.Item
									name="isAccidentHistory"
									rules={[
										{
											required: true,
											message: 'Please input bike ownership status!',
										},
									]}
								>
									<Radio.Group>
										<Radio value={1}>Has Accident History</Radio>
										<Radio value={0}>No Accident History</Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item
									name="detailDescription"
									rules={[
										{
											required: true,
											message: 'Please input details about your bike!',
										},
									]}
								>
									<Input.TextArea placeholder="Description" rows={8} />
								</Form.Item>

								<Typography.Title level={5}>Upload Image</Typography.Title>
								<Form.Item
									name="detailDescription"
									rules={[
										{
											required: true,
											message: 'Please input details about your bike!',
										},
									]}
								>
									{/* <Input.TextArea placeholder="Description" rows={8} /> */}
									<ImgCrop rotationSlider>
										<Upload
											action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
											listType="picture-card"
											fileList={fileList}
											onChange={onChange}
											onPreview={onPreview}
										>
											{fileList.length < 5 && '+ Upload'}
										</Upload>
									</ImgCrop>
								</Form.Item>
								<Form.Item>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</section>
		</AppLayout>
	);
}
