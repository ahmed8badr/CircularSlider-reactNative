import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Home = () => {
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
        <View style={styles.chart}></View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.h32}>
            Total amount with applicable fees will be $58.92
          </Text>
          <Pressable>
            <Ionic name={'arrow-forward-circle'} size={50} color={'#232323'} />
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
    width: '80%',
    height: '75%',
    marginVertical: '40%',
    marginHorizontal: '10%',
    borderRadius: 10,
    padding: '5%',
  },
  h1: {
    marginTop: 5,
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h3: { marginTop: 5, color: '#151515', fontSize: 15 },
  chart: { marginVertical: '10%', height: '65%', backgroundColor: '#e5e5e5' },
  h32: { marginTop: 5, color: '#151515', fontSize: 15, flex: 3 },
});
