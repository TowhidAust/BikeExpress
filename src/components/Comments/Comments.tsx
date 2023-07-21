import { Avatar, Col, Comment, Row, Tooltip, Typography } from 'antd';

type PropTypes = {
	author?: string;
	children?: React.ReactNode;
	comment?: string;
};
export default function Comments(props: PropTypes) {
	const { author, children, comment } = props;

	return (
		<Row gutter={8}>
			<Col xs={24} sm={24} md={24}>
				<Comment
					author={
						<Typography.Text className="primary-font-color" type="secondary">
							{author}
						</Typography.Text>
					}
					avatar={<Avatar src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Han Solo" />}
					content={<Typography.Text>{comment}</Typography.Text>}
					datetime={
						<Tooltip title="2016-11-22 11:22:33">
							<span>8 hours ago</span>
						</Tooltip>
					}
				>
					{children}
				</Comment>
				<div className="text-right" />
			</Col>
		</Row>
	);
}
