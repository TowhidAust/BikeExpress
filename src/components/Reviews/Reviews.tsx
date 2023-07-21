import { Avatar, Comment, Divider, Pagination, Rate, Tooltip, Typography } from 'antd';

export default function Reviews() {
	return (
		<section>
			<Typography.Text className="mr-2"> 3.5/5 </Typography.Text>
			<Rate allowHalf defaultValue={2.5} disabled />
			<Divider />

			<section>
				<Comment
					author={<Typography.Text className="primary-font-color">Towhidul Islam</Typography.Text>}
					avatar={<Avatar src="https://www.w3schools.com/w3css/img_avatar3.png" />}
					datetime={
						<Tooltip title="2016-11-22 11:22:33">
							<span>8 hours ago</span>
						</Tooltip>
					}
					content={
						<>
							<Rate allowHalf defaultValue={2.5} disabled /> <br />
							<Typography.Text>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit. Enim ab quia non, rem
								repellendus blanditiis sint sapiente hic, assumenda ipsam eum nihil? Voluptatum est omnis architecto
								repudiandae ad?
							</Typography.Text>
						</>
					}
				/>
			</section>
			<section className="text-right">
				<Pagination defaultCurrent={1} total={50} />
			</section>
		</section>
	);
}
