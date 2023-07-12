import { Modal } from 'antd';

type PropTypes = {
	isOpen: boolean;
	handleCancel: () => void;
	handleOk: () => void;
	modalBody: any;
	minWidth?: string | number;
	title: string;
	bodyStyle?: any;
};

export default function BasicModal(props: PropTypes) {
	const { isOpen, handleOk, handleCancel, modalBody, minWidth, title, bodyStyle } = props;
	return (
		<Modal
			bodyStyle={bodyStyle}
			title={title}
			open={isOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			style={{ minWidth }}
			centered
		>
			{modalBody}
		</Modal>
	);
}
