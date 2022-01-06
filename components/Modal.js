import { useTheme } from '@react-navigation/native'
import { Modal as RNModal, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Button from './Button'
import Icon from './Icon'
import Typography from './Typography'

/**
 * Modal
 * @param {*} param0
 * @returns
 */
export default function Modal({ title, visible, onClose, children }) {
  const theme = useTheme();
  return (
    <RNModal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <View style={[theme.modal]}>
        <View style={[theme.modalContainer]}>
          <View style={[theme.modalTitle]}>
            <Typography>{title}</Typography>
            {onClose &&
              <TouchableOpacity activeOpacity={0.5} style={{ padding: 0 }} onPress={onClose}>
                <Icon icon="close" />
              </TouchableOpacity>
            }
          </View>
          <ScrollView style={[theme.modalContent]}>
            {children}
          </ScrollView>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', backgroundColor: theme.colors.black, opacity: 0.5 }}></View>
      </TouchableWithoutFeedback>
    </RNModal>
  )
}