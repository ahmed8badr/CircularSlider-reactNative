import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import CircleSlider from 'react-native-circle-slider';

const Home = () => {
  let [fontLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins.ttf'),
    PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
  });

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
          <CircleSlider maxValue={5000} minValue={50} limit={1500} />
          <Text style={styles.maxText}>
            <Text style={styles.hyperLink} onPress={() => {}}>
              Max
            </Text>{' '}
            $1500
          </Text>
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
          <Pressable style={{ marginTop: '8%' }}>
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
    marginTop: '10%',
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
    position: 'absolute',
    paddingTop: '10%',
    fontFamily: 'Poppins',
    marginTop: 8,
    fontSize: 15,
  },
});
