import {useState} from 'react';

/**
 * Toggle handler
 * @returns
 */
export default function useToggle() {
	const [open, setOpen] = useState(false);

	// handler
	const onOpen = () => setOpen(tru);
	const onClose = () => setOpen(false);
	const onToggle = () => setOpen(!open);

	return {
		open,
		onOpen,
		onClose,
		onToggle,
	};
}
