import { Dimensions, StyleSheet, useWindowDimensions } from "react-native"
import * as ScreenOrientation from 'expo-screen-orientation';
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
    divider: { borderBottomWidth: 1, borderBottomColor: global.colors.grayLight, marginVertical: 10 },
    input: {
      backgroundColor: global.colors.background,
      borderColor: global.colors.borderDarken,
      padding: 8, borderStyle: 'solid', borderWidth: 1,
      borderRadius: 4, elevation: 1
    },
    avatar: { borderRadius: 50 },
    avatarSm: { width: 35, height: 35 },
    avatarMd: { width: 55, height: 55 },
    avatarLg: { width: 85, height: 85 },
    avatarXl: { width: 100, height: 100 },
    modal: {
      flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    modalContainer: {
      backgroundColor: 'white',
      width: width - 20,
      borderRadius: 8,
      margin: 'auto',
      padding: 15,
      elevation: 5,
      position: 'relative',
      zIndex: 2,
      borderColor: global.colors.borderDarken,
      borderWidth: 1,
      borderStyle: 'solid'
    },
    modalContent: {
      maxHeight: height * 0.5,
      overflow: 'scroll'
    },
    modalTitle: { marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: global.colors.border, borderBottomWidth: 1, paddingVertical: 10 },
    ...Typography(global),
    ...themeButton(global)
  })

}

// export
export default AppTheme;