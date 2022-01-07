import { useTheme } from '@react-navigation/native'
import { TextInput, View } from 'react-native'
import Icon from './Icon'

/**
 * Input
 * @param {*} param0
 * @returns
 */
export default function Input({ name, value, onChange, iconEnd, inputStyle, style, ...rest }) {

  // theme
  const theme = useTheme()
  // change handelr
  const onChangeHandler = (value) => {
    onChange(name, value)
  }

  return (
    <View style={[theme.input, { width: '100%', marginBottom: 15, ...style }]}>
      <TextInput style={[{ paddingRight: iconEnd && 32 }, inputStyle]} value={value} onChangeText={onChangeHandler} {...rest} />
      {iconEnd && <View style={{ position: 'absolute', zIndex: 2, right: 10, top: 10 }}>
        <Icon icon={iconEnd} size={24} />
      </View>}
    </View>
  )
}