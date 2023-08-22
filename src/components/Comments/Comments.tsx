import { Col, Row } from 'antd';
// import { Comment } from '@ant-design/compatible';

type PropTypes = {
	author?: string;
	children?: React.ReactNode;
	comment?: string;
};
export default function Comments(props: PropTypes) {
	const { children, author, comment } = props;

	return (
		<Row gutter={8}>
			<Col xs={24} sm={24} md={24}>
				<div>{author}</div>
				<div>{comment}</div>
				<div>{children}</div>
				<div className="text-right" />
			</Col>
		</Row>
	);
}
