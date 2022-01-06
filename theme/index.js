import { Dimensions, StyleSheet, useWindowDimensions } from "react-native"
import { DefaultTheme } from '@react-navigation/native'
import themeButton from "./Button"
import Typography from "./Typography"
import { Color } from "./Color"
/**
 * App Theme
 * @param {*} theme
 * @returns
 */
const AppTheme = (theme) => {

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // global
  const global = {
    ...theme,
    colors: {
      ...theme.colors,
      ...Color,
    },
    height,
    width,
  }


  // global style
  return StyleSheet.create({
    screen: { flex: 1 },
    screenCenter: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    input: {
      backgroundColor: global.colors.background,
      borderColor: global.colors.borderDarken, width: '100%',
      padding: 8, borderStyle: 'solid', borderWidth: 1,
      borderRadius: 4, elevation: 1
    },
    avatar: { borderRadius: 50 },
    avatarSm: { width: 35, height: 35 },
    avatarMd: { width: 55, height: 55 },
    avatarLg: { width: 85, height: 85 },
    avatarXl: { width: 100, height: 100 },
    ...Typography(global),
    ...themeButton(global)
  })

}

// export
export default AppTheme;