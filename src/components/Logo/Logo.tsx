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
			<div style={{ color: fontColor, width: '40%', textAlign: 'left' }}> RIDERS </div>
			<div
				style={{
					width: '20%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<FaMotorcycle className="primary-font-color width-100 mr-1" style={{ fontSize: iconFontSize }} />
			</div>
			<div style={{ color: fontColor, width: '40%', textAlign: 'right' }}> CONSOLE </div>
		</div>
	);
}
