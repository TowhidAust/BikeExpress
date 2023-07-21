import { Button, Card, Divider, Input, Pagination, Tabs } from 'antd';
import Comments from '../Comments/Comments';
import Reviews from '../Reviews/Reviews';

export default function RatingsAndReviews() {
	return (
		<Card className="mt-3">
			<Tabs
				size="large"
				defaultActiveKey="1"
				items={[
					{
						label: 'Questions',
						key: '1',
						children: (
							<>
								<Comments author="Towhidul Islam" comment="Is this product have matte black color?">
									<Comments
										author="BIKE-HUB-SUPPORT"
										comment="Sorry sir, Currently matt black color is out of stock. But we will restock it soon. Please stay connected with us. Thanks!"
									/>
								</Comments>
								<div className="text-right">
									<Pagination defaultCurrent={1} total={50} />
								</div>
								<Divider />
								<Input.TextArea
									className="mt-4 pt-2 pl-3 pr-3 pb-3"
									placeholder="Add your comment"
									rows={5}
									size="large"
								/>
								<Button className="mt-3" size="large" type="primary" block>
									ADD COMMENT
								</Button>
							</>
						),
					},
					{
						label: 'Reviews',
						key: '2',
						children: <Reviews />,
					},
				]}
			/>
		</Card>
	);
}
