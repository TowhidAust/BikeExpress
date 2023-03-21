import { Button, Card, Col, Row, Typography } from 'antd';

type ProductPropTypes = {
	// key: any;
	image: any;
	title: string;
	price: number;
	isUsed: boolean;
	model: string;
	cc: number;
	km: number;
	isFirstOwner: boolean;
	location: string;
	isNegotiable: boolean;
	onDetailsButtonClick: () => void;
};
export default function ProductCardBike(props: ProductPropTypes) {
	const {
		// key,
		image,
		title,
		price,
		isUsed,
		model,
		cc,
		km,
		isFirstOwner,
		location,
		isNegotiable,
		onDetailsButtonClick,
	} = props;
	return (
		<Card
			// key={key}
			cover={
				<div
					style={{
						position: 'relative',
						textAlign: 'right',
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: '200px',
					}}
				>
					<Button
						style={{ position: 'absolute', bottom: 0, right: 0 }}
						type="primary"
						onClick={onDetailsButtonClick}
					>
						DETAILS
					</Button>
				</div>
			}
		>
			<Row gutter={[8, 8]}>
				<Col xs={24} sm={24} md={24}>
					<Typography.Title
						level={5}
						style={{
							whiteSpace: 'nowrap',
							width: '90%',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						<abbr
							style={{ textDecoration: 'none' }}
							title="HONDA CBR 150 DUAL CHANNEL ABS"
						>
							{title}
						</abbr>
					</Typography.Title>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<Typography.Text className="font-weight-600 primary-font-color">
						BDT {price}
					</Typography.Text>
				</Col>
				<Col xs={24} sm={24} md={12}>
					Condition: {isUsed ? 'Used' : 'New'}
				</Col>
				<Col xs={24} sm={24} md={12}>
					Model: {model}
				</Col>
				<Col xs={24} sm={24} md={12}>
					CC: {cc}
				</Col>
				<Col xs={24} sm={24} md={12}>
					Km: {km}
				</Col>
				<Col xs={24} sm={24} md={12}>
					Owner: {isFirstOwner ? '1st' : 'Pre-Owned'}
				</Col>
				<Col xs={24} sm={24} md={12}>
					Location: {location}
				</Col>
				<Col xs={24} sm={24} md={12}>
					{isNegotiable ? 'Negotiable' : 'fixed price'}
				</Col>
			</Row>
		</Card>
	);
}
