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

function Toast({ toastProps }) {
	const { message, variantValue, remomveToast } = toastProps;

	const MessageIcon = ICONS_BY_VARIANT[variantValue];
	return (
		<div className={`${styles.toast} ${styles[variantValue]}`}>
			<div className={styles.iconContainer}>
				<MessageIcon size={24} />
			</div>
			<p className={styles.content}>{message}</p>
			<button className={styles.closeButton} onClick={remomveToast}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
