import { Card, Col, Row } from 'antd';

type PropTypes = {
	isLoading: boolean;
};
export default function GridSkeleton(props: PropTypes) {
	const { isLoading } = props;
	return (
		<Row gutter={[16, 16]}>
			{[1, 2, 3, 4].map((item) => (
				<Col xs={24} sm={24} md={6}>
					<Card key={item} loading={isLoading} />
				</Col>
			))}
		</Row>
	);
}
