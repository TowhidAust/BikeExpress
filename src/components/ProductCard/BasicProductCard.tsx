import { Button, Card, Col, Row, Typography } from 'antd';
import { BlackButtonContainer } from '@/styles/styled/BlackButtonContainer';

type ProductPropTypes = {
	productInfo: {
		image: string;
		title: string;
		price: string;
		available?: number;
	};
	onDetailsButtonClick: () => void;
};
export default function BasicProductCard(props: ProductPropTypes) {
	const { onDetailsButtonClick, productInfo } = props;
	const { image, title, price } = productInfo;
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
						borderRadius: '8px 8px 0 0',
					}}
				>
					<BlackButtonContainer>
						<Button
							style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: '8px 0 0 0' }}
							type="primary"
							onClick={onDetailsButtonClick}
						>
							DETAILS
						</Button>
					</BlackButtonContainer>
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
						<abbr style={{ textDecoration: 'none' }} title={title}>
							{title}
						</abbr>
					</Typography.Title>
					{productInfo?.available && <Typography.Text> Available: {productInfo?.available} </Typography.Text>}
				</Col>
				<Col xs={24} sm={24} md={12}>
					<Typography.Text className="font-weight-600 primary-font-color">BDT {price}</Typography.Text>
				</Col>
			</Row>
		</Card>
	);
}
