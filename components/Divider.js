import { useTheme } from '@react-navigation/native'
import { View } from 'react-native'

/**
 * Divider
 * @param {*} param0
 * @returns
 */
export default function Divider({ color, style }) {
  const theme = useTheme()
  return (
    <View style={[theme.divider, { color }, style]} />
  )
}