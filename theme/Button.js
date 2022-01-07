/**
 * Theme button
 * @param {*} theme
 * @returns
 */
export default function themeButton(theme) {
	const {colors, width} = theme;

	return {
		btnGroup: {flexDirection: 'row', width: '100%', alignItems: 'center'},
		rounded: {borderRadius: 50},
		btn: {
			paddingHorizontal: 12,
			paddingVertical: 6,
			borderColor: 'transparent',
			borderStyle: 'solid',
			borderWidth: 2,
			alignItems: 'center',
			borderRadius: 5,
			shadowColor: colors.border,
			shadowOffset: {width: 5, height: 4},
			shadowOpacity: 0.3,
			shadowRadius: 5,
			elevation: 2,
		},
		btnText: {
			fontFamily: 'RobotoMedium',
			fontWeight: '500',
			fontSize: 14,
		},
		text: {elevation: 0},
		primary: {backgroundColor: colors.primary, borderColor: colors.primary},
		primaryText: {color: colors.white},
		primaryOutline: {
			borderColor: colors.primary,
			backgroundColor: colors.white,
		},
		primaryOutlineText: {color: colors.primary},
		secondary: {
			backgroundColor: colors.secondary,
			borderColor: colors.secondary,
		},
		secondaryText: {color: colors.gray},
		secondaryOutline: {
			borderColor: colors.secondary,
			backgroundColor: colors.white,
		},
		secondaryOutlineText: {color: colors.gray},
		danger: {backgroundColor: colors.danger, borderColor: colors.danger},
		dangerText: {color: colors.white},
		dangerOutline: {
			borderColor: colors.danger,
			backgroundColor: colors.white,
		},
		dangerOutlineText: {color: colors.danger},
		success: {backgroundColor: colors.success, borderColor: colors.success},
		successText: {color: colors.white},
		successOutline: {
			borderColor: colors.success,
			backgroundColor: colors.white,
		},
		successOutlineText: {color: colors.success},
		warning: {backgroundColor: colors.warning, borderColor: colors.warning},
		warningText: {color: colors.white},
		warningOutline: {
			borderColor: colors.warning,
			backgroundColor: colors.white,
		},
		warningOutlineText: {color: colors.warning},
		purple: {backgroundColor: colors.purple, borderColor: colors.purple},
		purpleText: {color: colors.white},
		purpleOutline: {
			borderColor: colors.purple,
			backgroundColor: colors.white,
		},
		purpleOutlineText: {color: colors.purple},
		btnXs: {width: 80, paddingVertical: 4},
		btnSm: {width: width / 5},
		btnMd: {width: width / 4},
		btnLg: {width: width / 3},
		btnXl: {width: width / 2},
	};
}
