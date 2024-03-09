import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variantValue, setVariantValue] = React.useState("");
	const [showToast, setShowToast] = React.useState(false);
	const toastProps = {
		message,
		variantValue,
		remomveToast,
	};

	function addToast(e) {
		e.preventDefault();
		setShowToast((currentToast) => !currentToast);	
	}

	function remomveToast(e) {
		e.preventDefault();
		setShowToast((currentToast) => !currentToast);
		setMessage("");
		setVariantValue("");
	}

	console.log(variantValue);
	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{showToast && <Toast toastProps={toastProps} />}

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							id="message"
							className={styles.messageInput}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((variant) => {
							return (
								<label htmlFor={`variant-${variant}`} key={variant}>
									<input
										type="radio"
										name="variant"
										id={`variant-${variant}`}
										value={variant}
										onChange={(e) => setVariantValue(e.target.value)}
									/>
									{variant}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="button" onClick={addToast}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
