export const themButton = (theme) => {
  const { color, width } = theme;
  return {
    btn: {
      paddingHorizontal: 8,
      paddingVertical: 12,
      fontSize: 14,
      fontFamily: 'Roboto',
      fontWeight: '500'
    },
    ['btn-text']: {},
    ['btn-fill']: {},
    ['btn-outline']: {},
    primary: {},
    primaryText: {}
  }
}