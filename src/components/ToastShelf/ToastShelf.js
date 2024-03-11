import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
	const { toasts, removeToasts } = React.useContext(ToastContext);

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="assertive"
			aria-label="Notification"
		>
			<li className={styles.toastWrapper}>
				{toasts?.length > 0 &&
					toasts.map((toast) => (
						<Toast
							toast={toast}
							key={toast.id}
							removeToasts={() => removeToasts(toast.id)}
						/>
					))}
			</li>
		</ol>
	);
}

export default ToastShelf;
