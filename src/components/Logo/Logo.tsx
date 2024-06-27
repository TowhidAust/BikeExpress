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
			className="font-white"
			style={{
				width,
				fontSize,
				display: 'flex',
				justifyContent: 'start',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<div style={{ color: fontColor, marginRight: 5 }}> MOTO </div>
			<div
				style={{
					width: '20%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<FaMotorcycle className="primary-font-color width-100" style={{ fontSize: iconFontSize }} />
			</div>
			<div style={{ color: fontColor, marginLeft: 5 }}> SURGERY </div>
		</div>
	);
}
