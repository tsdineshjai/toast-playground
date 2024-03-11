import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const { addToasts, message, setMessage, variantValue, setVariantValue } =
		React.useContext(ToastContext);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />
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
						{VARIANT_OPTIONS.map((option) => {
							return (
								<label htmlFor={`variant-${option}`} key={option}>
									<input
										type="radio"
										name="variant"
										id={`variant-${option}`}
										value={option}
										checked={option === variantValue}
										onChange={(e) => setVariantValue(e.target.value)}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="button" onClick={addToasts}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
