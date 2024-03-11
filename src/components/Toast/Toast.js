import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ toast, removeToasts }) {
	const { message, variantValue } = toast;
	const MessageIcon = ICONS_BY_VARIANT[variantValue];

	return (
		<div className={`${styles.toast} ${styles[variantValue]}`}>
			<div className={styles.iconContainer}>
				<MessageIcon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{variantValue}</VisuallyHidden>
				{message}
			</p>
			<button
				aria-label="Dismiss Message"
				aria-live="off"
				className={styles.closeButton}
				onClick={removeToasts}
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
