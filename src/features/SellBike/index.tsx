import { Button, Form, Input, Select } from 'antd';
import AppLayout from '@/components/Layout/AppLayout';

export default function SellBike() {
	return (
		<AppLayout>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in
				quibusdam quod voluptatibus nisi sunt ducimus sequi vel id, earum dolore
				rerum reiciendis cum eligendi ex, illum praesentium eum iure?Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Consequuntur quaerat
				impedit necessitatibus numquam soluta, ipsum ab earum officia accusamus
				reprehenderit. Aut incidunt tempore eos maiores in dolorem iure rerum
				autem quia soluta enim suscipit quod totam, debitis ut, sapiente dolor
				minima consequuntur laudantium recusandae vel animi. Sed modi a autem,
				necessitatibus rerum dolorem quas debitis odio velit possimus quia
				beatae aliquam sunt temporibus quaerat commodi cupiditate unde minus
				recusandae doloribus inventore reiciendis? Ratione beatae suscipit quas
				consectetur nulla perferendis deserunt consequatur aspernatur commodi,
				eveniet saepe, nihil officiis velit eum illo ipsam praesentium?
				Obcaecati mollitia saepe numquam et perspiciatis nam quidem molestias,
				itaque magnam blanditiis quod odit ipsam impedit debitis sit, explicabo
				doloremque quo rem iure voluptatem architecto, enim culpa totam! Alias
				quis numquam eos nesciunt consequatur, asperiores at libero maxime nihil
				cumque maiores laudantium rerum blanditiis a, sunt reprehenderit quam
				corrupti dolorum error quaerat officiis iusto distinctio. At doloribus
				impedit voluptatem sequi! Omnis explicabo ipsam aut rerum aliquam
				impedit nemo unde ea porro, ex ratione similique cumque aliquid adipisci
				cupiditate vel animi, molestias blanditiis? Debitis nemo neque.
			</p>
			<section>
				<Form
					name="basic"
					// labelCol={{ span: 8 }}
					// wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					// onFinish={onFinish}
					// onFinishFailed={onFinishFailed}
					autoComplete="off"
					size="large"
				>
					<Form.Item
						// label="Division"
						name="division"
						rules={[{ required: true, message: 'Please input your division!' }]}
					>
						<Select
							showSearch
							placeholder="Select your division"
							optionFilterProp="children"
							// onChange={onChange}
							// onSearch={onSearch}
							filterOption={(input, option) =>
								(option?.label ?? '')
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							options={[
								{
									value: 'dhaka',
									label: 'Dhaka',
								},
								{
									value: 'chittagong',
									label: 'Chittagong',
								},
								{
									value: 'rajshahi',
									label: 'Rajshahi',
								},
								{
									value: 'khulna',
									label: 'Khulna',
								},
								{
									value: 'barishal',
									label: 'Barishal',
								},
								{
									value: 'sylhet',
									label: 'Sylhet',
								},
							]}
						/>
					</Form.Item>

					<Form.Item
						// label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</section>
		</AppLayout>
	);
}
