import { Dimensions, StyleSheet, useWindowDimensions } from "react-native"
import { DefaultTheme } from '@react-navigation/native'

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
    color: Color,
    height,
    width,
  }

  // global style
  return StyleSheet.create({
    screen: { flex: 1 },
    screenCenter: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    avatar: { borderRadius: 50 },
    avatarSm: { width: 35, height: 35 },
    avatarMd: { width: 55, height: 55 },
    avatarLg: { width: 85, height: 85 },
    avatarXl: { width: 100, height: 100 },
  })

}

// export
export default AppTheme;