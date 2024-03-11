import React from "react";

import useKeyDown from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [variantValue, setVariantValue] = React.useState("");

	const handleEscape = React.useCallback(() => {
		setToasts([]);
	}, []);
	//empty dependency array shows i only want to get this useCallback executed once. since theer is variable in the
	//depenedency array, its not gonna run again.

	useKeyDown("Escape", handleEscape);

	const idToast = React.useId();
	function generateId() {
		return Date.now().toString(36);
	}
	function addToasts() {
		setToasts((currentToasts) => {
			return [
				...currentToasts,
				{
					id: `${idToast}-${generateId()}`,
					message,
					variantValue,
				},
			];
		});
		setMessage("");
		setVariantValue("");
	}
	function removeToasts(id) {
		const filteredToastArr = toasts.filter((toast) => toast.id !== id);
		setToasts(filteredToastArr);
	}

	return (
		<ToastContext.Provider
			value={{
				addToasts,
				removeToasts,
				toasts,
				message,
				setMessage,
				variantValue,
				setVariantValue,
				setToasts,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
