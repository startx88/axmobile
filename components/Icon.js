import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
/**
 * Icon component
 * @param {*} param0
 * @returns
 */
export default function Icon({ size = 24, icon, color, ...res }) {
  const theme = useTheme();
  return (
    <Ionicons name={icon} size={size} color={color ?? theme.colors.gray} />
  )
}