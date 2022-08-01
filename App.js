import * as React from 'react';
import Navigator from './Navigator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { View, Text, Button, StyleSheet } from 'react-native';
const toastConfig = {
  lenmeToast: ({ text1, props }) => (
    <View style={styles.toast}>
      <Text style={{ flex: 3, fontSize: 15, color: 'white' }}>{text1}</Text>
      <View style={{ flex: 1 }}>
        <Button title='Details' color='#05E4B5' />
      </View>
    </View>
  ),
};
export default function App() {
  return (
    <>
      <Navigator />
      <Toast config={toastConfig} />
    </>
  );
}
const styles = StyleSheet.create({
  toast: {
    height: 70,
    width: '90%',
    backgroundColor: '#232323',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
});
