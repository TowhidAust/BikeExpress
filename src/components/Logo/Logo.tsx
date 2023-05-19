import { FaMotorcycle } from 'react-icons/fa';

type PropTypes = {
	fontColor: string;
};
export default function Logo(props: PropTypes) {
	const { fontColor } = props;
	return (
		<h2
			className="font-white m-0 p-0"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<span style={{ color: fontColor }}> BIKE </span>
			<FaMotorcycle className="ml-2 mr-2 primary-font-color" style={{ fontSize: '26px' }} />
			<span style={{ color: fontColor }}> HUB </span>
		</h2>
	);
}
