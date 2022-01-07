import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTheme } from '@react-navigation/native'
import { StyleSheet, Modal as RNModal, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import useToggle from '../hooks/useToggle'
import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Typography from './Typography'

/**
 * Modal
 * @param {*} param0
 * @returns
 */
const ModalSearch = forwardRef((props, ref) => {
  // props
  const { name, value, onChange, children, onSearch, placeholder, ...rest } = props;

  // toggle hook
  const { onOpen, onToggle, open, onClose } = useToggle();

  // theme
  const theme = useTheme();
  const modalRef = useRef()

  // use ref
  useImperativeHandle(ref, () => ({ onOpen, onClose, onToggle }))

  return (
    <RNModal
      visible={open}
      onRequestClose={onClose}
      animationType="slide"
      onSwipe={onClose}
      propagateSwipe={true}
      ref={modalRef}
    >
      <View style={{ padding: 15, flex: 1, zIndex: 2 }}>
        <View style={{ marginBottom: 20 }}>
          <Input
            iconEnd="search-outline"
            value={value}
            name={name}
            onChange={onChange}
            placeholder="Search keyword..."
            onSubmitEditing={onSearch} />
        </View>
        <View style={{ flex: 1 }}>
          {children}
        </View>
        <View>
          <Button color="primary" onPress={onClose}>Close</Button>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', backgroundColor: theme.colors.black, opacity: 0.5 }}></View>
      </TouchableWithoutFeedback>
    </RNModal>
  )
})

export default ModalSearch;