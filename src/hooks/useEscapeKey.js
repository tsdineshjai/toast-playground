import React from "react";

function useKeyDown(key, resetArray) {
	React.useEffect(() => {
		function handleEscKey(e) {
			if (e.key === key) {
				resetArray(e);
			}
		}

		document.addEventListener("keydown", handleEscKey);
		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [key, resetArray]);
}

export default useKeyDown;
