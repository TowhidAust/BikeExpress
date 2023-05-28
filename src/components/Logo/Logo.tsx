import { FaMotorcycle } from 'react-icons/fa';

type PropTypes = {
	fontColor: string;
	width: any;
	fontSize: any;
	iconFontSize: any;
};
export default function Logo(props: PropTypes) {
	const { fontColor, width, fontSize, iconFontSize } = props;
	return (
		<div
			className="font-white m-0 p-0"
			style={{
				width,
				fontSize,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<div style={{ color: fontColor, width: '33%' }}> BIKE </div>
			<FaMotorcycle className="ml-2 mr-2 primary-font-color" style={{ fontSize: iconFontSize }} />
			<div style={{ color: fontColor, width: '33%' }}> HUB </div>
		</div>
	);
}
