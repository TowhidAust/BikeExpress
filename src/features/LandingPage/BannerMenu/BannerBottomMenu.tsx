import { RiOilLine, RiToolsLine } from 'react-icons/ri';
import { GiCartwheel, GiLoveHowl, GiSchoolBag, GiSmartphone, GiStickGrenade } from 'react-icons/gi';
import { Card, Col, Divider, Row, Typography } from 'antd';
import { FaGripHorizontal } from 'react-icons/fa';
import { AiOutlineCamera, AiOutlinePhone } from 'react-icons/ai';

export default function BannerBottomMenu() {
	const bannerBottomMenuCategories = [
		{
			key: 1,
			categoryName: 'SUZUKI',
			categoryIcon: RiOilLine,
		},
		{
			key: 2,
			categoryName: 'YAMAHA',
			categoryIcon: RiToolsLine,
		},
		{
			key: 3,
			categoryName: 'HONDA',
			categoryIcon: GiLoveHowl,
		},
		{
			key: 4,
			categoryName: 'TVS',
			categoryIcon: GiSchoolBag,
		},
		{
			key: 5,
			categoryName: 'BAJAJ',
			categoryIcon: GiStickGrenade,
		},
		{
			key: 6,
			categoryName: 'HERO',
			categoryIcon: GiSmartphone,
		},
		{
			key: 7,
			categoryName: 'GPX',
			categoryIcon: GiCartwheel,
		},
		{
			key: 8,
			categoryName: 'LIFAN',
			categoryIcon: FaGripHorizontal,
		},
		{
			key: 9,
			categoryName: 'ZONTES',
			categoryIcon: AiOutlineCamera,
		},
		{
			key: 10,
			categoryName: 'KTM',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 11,
			categoryName: 'APRILIA',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 12,
			categoryName: 'KAWASAKI',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 13,
			categoryName: 'BENELLI',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 14,
			categoryName: 'KEEWAY',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 15,
			categoryName: 'TARO',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 16,
			categoryName: 'VESPA',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 17,
			categoryName: 'ROADMASTER',
			categoryIcon: AiOutlinePhone,
		},
		{
			key: 18,
			categoryName: 'SPEEDER',
			categoryIcon: AiOutlinePhone,
		},
	];
	return (
		<Row gutter={[6, 6]} className="mt-1">
			<Col span={24}>
				<Typography.Title className="m-0" level={4}>
					Spare Parts
				</Typography.Title>
				<Divider className="mt-2 mb-2" />
			</Col>
			{bannerBottomMenuCategories?.map((item) => (
				<Col xs={24} sm={24} md={4} key={Math.random()}>
					<Card
						hoverable
						className="p-0 text-center primary-font-color"
						bodyStyle={{
							padding: '10px',
						}}
					>
						{item?.categoryName}
					</Card>
				</Col>
			))}
		</Row>
	);
}
