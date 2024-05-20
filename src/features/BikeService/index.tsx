import { Card, Col, Divider, Row, Typography } from 'antd';
import { FaCircleCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTE } from '@/router/appRoutes';

export default function BikeService() {
	const navigate = useNavigate();
	const regularServiceClickHandler = () => {
		navigate(PUBLIC_ROUTE.BIKE_SERVICE_CENTERS);
	};
	return (
		<Row gutter={[16, 8]} className="mt-1">
			<Col span={24}>
				<Typography.Title className="m-0" level={4}>
					DEBUG YOUR BIKE AT HOME
				</Typography.Title>
				<Divider className="mt-2 mb-2" />
			</Col>
			<Col xs={24} sm={24} md={8}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src="https://images.pexels.com/photos/4876631/pexels-photo-4876631.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
					}
					onClick={regularServiceClickHandler}
				>
					<Typography.Title level={5}>REGULAR DEBUG</Typography.Title>
					<section className="pl-2">
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Bike Inspection</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Brake pads</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Headlights and brake light</div>
						</div>
					</section>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={8}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src="https://images.pexels.com/photos/3817919/pexels-photo-3817919.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
					}
				>
					<Typography.Title level={5}>MASTER DEBUG</Typography.Title>
					<section className="pl-2">
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Bike Inspection</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Brake pads</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Headlights and brake light</div>
						</div>
					</section>
				</Card>
			</Col>
			<Col xs={24} sm={24} md={8}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src="https://images.pexels.com/photos/12741644/pexels-photo-12741644.jpeg?auto=compress&cs=tinysrgb&w=600"
						/>
					}
				>
					<Typography.Title level={5}>PAY AS YOU GO</Typography.Title>
					<section className="pl-2">
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Bike Inspection</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Brake pads</div>
						</div>
						<div className="flex">
							<div>
								<FaCircleCheck className="mt-1 text-green-500" />
							</div>
							<div className="flex-1 ml-1">Headlights and brake light</div>
						</div>
					</section>
				</Card>
			</Col>
		</Row>
	);
}
