import {useRef} from 'react';

/**
 * toggle ref
 * @returns
 */
export default function useToggleRef() {
	const refs = useRef();
	// handler
	const onOpen = () => {
		if (refs.current) {
			refs.current.onOpen();
		}
	};
	const onClose = () => {
		if (refs.current) {
			refs.current.onClose();
		}
	};
	const onToggle = () => {
		if (refs.current) {
			refs.current.onToggle();
		}
	};

	return {
		refs,
		onOpen,
		onClose,
		onToggle,
	};
}
