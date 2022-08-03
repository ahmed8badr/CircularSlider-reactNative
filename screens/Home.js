import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { useFonts } from 'expo-font';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Home = () => {
  let [fontLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
  });
  const [range, setRange] = useState('50%');
  const [color, setColor] = useState('#F5F4F8');

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.top}>
        <Image
          source={require('../assets/lenme.png')}
          style={{ height: 40, width: 40 }}
        />
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.h3}>Loan amount</Text>
          <Text style={styles.h1}>How much would you like to borrow?</Text>
        </View>
        <View style={styles.chart}>
          <Text style={styles.rangeText}>${range}</Text>
          <Text style={styles.maxText}>
            <Text style={styles.hyperLink} onPress={() => {}}>
              Max
            </Text>{' '}
            $1500
          </Text>
          <Slider
            style={{ width: 280, height: 15, marginTop: '25%' }}
            minimumValue={50}
            maximumValue={5000}
            minimumTrackTintColor='#232323'
            maximumTrackTintColor={color}
            step={50}
            value={100}
            onValueChange={(value) => {
              if (value > 1500) {
                setColor('#FFDA69');
                setRange(1500);
                Toast.show({
                  type: 'lenmeToast',
                  text1: 'Maximum amount is $1500.',
                });
              } else {
                setColor('#F5F4F8');
                setRange(parseInt(value));
              }
            }}
          />
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={{ flex: 1, fontFamily: 'Poppins', color: '#585858' }}>
              $50
            </Text>
            <Text style={{ fontFamily: 'Poppins', color: '#585858' }}>$5k</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.h32}>
            Total amount with applicable{' '}
            <Text style={styles.hyperLink} onPress={() => {}}>
              fees
            </Text>{' '}
            will be
            <Text style={{ fontFamily: 'PoppinsSemiBold' }}> $58.92</Text>
          </Text>
          <Pressable style={{ marginTop: '15%' }}>
            <Ionic name={'arrow-forward-circle'} size={60} color={'#232323'} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  top: {
    height: '45%',
    backgroundColor: '#7659FB',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: '8%',
    paddingVertical: '20%',
  },
  main: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '85%',
    height: '75%',
    marginVertical: '40%',
    marginHorizontal: '7.5%',
    borderRadius: 10,
    padding: '5%',
  },
  h1: {
    fontFamily: 'PoppinsSemiBold',
    marginTop: 5,
    color: '#151515',
    fontSize: 22,
  },
  h3: { fontFamily: 'Poppins', marginTop: 5, color: '#151515', fontSize: 17 },
  chart: {
    marginVertical: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h32: {
    marginTop: '18%',
    fontFamily: 'Poppins',
    color: '#151515',
    fontSize: 15,
    flex: 3,
  },
  hyperLink: {
    fontFamily: 'Poppins',
    color: '#6852CB',
    textDecorationLine: 'underline',
  },
  rangeText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 60,
  },
  maxText: {
    fontFamily: 'Poppins',
    marginTop: 8,
    fontSize: 20,
  },
});
