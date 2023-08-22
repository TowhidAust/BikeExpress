import { Divider, Pagination, Rate, Typography } from 'antd';

export default function Reviews() {
	return (
		<section>
			<Typography.Text className="mr-2"> 3.5/5 </Typography.Text>
			<Rate allowHalf defaultValue={2.5} disabled />
			<Divider />

			<section>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ea quas eligendi debitis molestiae
					voluptate pariatur quisquam, fugit voluptas cupiditate explicabo minus officia est saepe. Deleniti tempora
					officia earum sit!
				</div>
			</section>
			<section className="text-right">
				<Pagination defaultCurrent={1} total={50} />
			</section>
		</section>
	);
}
