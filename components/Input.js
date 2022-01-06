import { useTheme } from '@react-navigation/native'
import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

/**
 * Input
 * @param {*} param0
 * @returns
 */
export default function Input({ name, value, onChange, iconEnd, parentStyle, style, ...rest }) {

  // theme
  const theme = useTheme()
  // change handelr
  const onChangeHandler = (value) => {
    onChange(name, value)
  }

  return (
    <View style={{ marginBottom: 15, width: '100%', ...parentStyle }}>
      <TextInput style={[theme.input, { paddingRight: iconEnd && 25 }, style]} value={value} onChangeText={onChangeHandler} {...rest} />
      {iconEnd && <View style={{ position: 'absolute', right: 10, top: 10 }}><Ionicons name={iconEnd} size={24} color={theme.colors.gray} /></View>}
    </View>
  )
}