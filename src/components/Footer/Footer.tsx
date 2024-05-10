import { Divider, Layout } from 'antd';

const { Footer } = Layout;
export default function AppFooter() {
	return (
		<Footer className="p-0">
			<Divider />
			<section className="text-center py-5">
				<div>©2022 Created by Md. Towhidul Islam </div>
				<div>towhidaustcse33@gmail.com</div>
			</section>
			<Divider />
		</Footer>
	);
}
