import { Modal } from 'antd';

type PropTypes = {
	isOpen: boolean;
	handleCancel: () => void;
	handleOk: () => void;
	modalBody: any;
	minWidth?: string | number;
	title: string;
	bodyStyle?: any;
	okText?: string;
	isFooter?: boolean;
};

export default function BasicModal(props: PropTypes) {
	const { isOpen, handleOk, handleCancel, modalBody, minWidth, title, bodyStyle, okText, isFooter } = props;

	if (!isFooter) {
		return (
			<Modal
				bodyStyle={bodyStyle}
				title={title}
				open={isOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				style={{ minWidth }}
				centered
				okText={okText}
				footer={isFooter} // hide footer
			>
				{modalBody}
			</Modal>
		);
	}

	return (
		<Modal
			bodyStyle={bodyStyle}
			title={title}
			open={isOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			style={{ minWidth }}
			centered
			okText={okText}
		>
			{modalBody}
		</Modal>
	);
}
