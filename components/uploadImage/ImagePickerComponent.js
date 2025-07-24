// ImagePickerComponent.js
import React from 'react';
import { View, Button, Image, Alert, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent({ visible, onClose, onImageSelected }) {
  const handleRequestCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Bạn cần cấp quyền camera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 1 });
    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
      onClose();
    }
  };

  const handlePickLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, quality: 1 });
    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContainer}>
        <Button title="Chụp ảnh" onPress={handleRequestCamera} />
        <View style={styles.space} />
        <Button title="Chọn ảnh từ thư viện" onPress={handlePickLibrary} />
        <View style={styles.space} />
        <Button title="Hủy" onPress={onClose} color="red" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  space: {
    height: 10,
  },
});
