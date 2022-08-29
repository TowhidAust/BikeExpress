import { Select } from 'antd';
import i18next from 'i18next';

const { Option } = Select;
function LanguageSwitcher() {
	const langChangeHandler = (value: string) => {
		i18next.changeLanguage(value);
	};

	return (
		<Select size="large" defaultValue="EN" onChange={langChangeHandler}>
			<Option value="en">EN</Option>
			<Option value="bn">BN</Option>
		</Select>
	);
}

export default LanguageSwitcher;
