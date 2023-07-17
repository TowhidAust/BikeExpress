import { Button, Card, Col, Image, Row, Typography } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';

export default function HelmetDetails() {
	return (
		<AppLayout>
			<Card>
				<Row gutter={[16, 16]}>
					<Col md={8}>
						<Card className="mb-2" bodyStyle={{ padding: '1%' }}>
							<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
						</Card>

						<Row>
							<Col span={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
								</Card>
							</Col>
							<Col span={6}>
								<Card hoverable className="p-0" bodyStyle={{ padding: '3%' }}>
									<Image src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
								</Card>
							</Col>

							<Col span={24}>
								<Row className="mt-2" gutter={[8, 8]}>
									<Col span={12}>
										<Button size="large" block type="ghost">
											ADD TO CART
										</Button>
									</Col>
									<Col span={12}>
										<Button size="large" block type="primary">
											BUY NOW
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col md={16}>
						<Typography.Title className="m-0" level={2}>
							MT Targo Pro H450
						</Typography.Title>
						<Typography.Title level={5} className="m-0 primary-font-color">
							BDT 7800
						</Typography.Title>
					</Col>
				</Row>
			</Card>
		</AppLayout>
	);
}
