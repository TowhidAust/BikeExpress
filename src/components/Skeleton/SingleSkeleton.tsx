import { Card, Col, Row } from 'antd';

type PropTypes = {
	isLoading: boolean;
};
export default function SingleSkeleton(props: PropTypes) {
	const { isLoading } = props;
	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} sm={24} md={6}>
				<Card loading={isLoading} />
			</Col>
		</Row>
	);
}
