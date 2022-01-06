import { View } from 'react-native';
import { useTheme } from '@react-navigation/native'

/**
 * Button Group
 */
export default function ButtonGroup({ align, children, ...rest }) {
  const theme = useTheme()
  return (
    <View style={[theme.btnGroup, { justifyContent: align }]} {...rest}>
      {children}
    </View>
  )
}

ButtonGroup.defaultProps = {
  align: 'center'
}