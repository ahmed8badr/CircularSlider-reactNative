import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import HomeScreen from './navigation/screens/HomeScreen';
import HistoryScreen from './navigation/screens/HistoryScreen';
import MenuScreen from './navigation/screens/MenuScreen';
import NotificationScreen from './navigation/screens/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#999999',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#232323',
            height: '10%',
            paddingTop: 8,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='History' component={HistoryScreen} />
        <Tab.Screen name='Menu' component={MenuScreen} />
        <Tab.Screen
          name='Notification'
          component={NotificationScreen}
          options={{
            tabBarBadge: '',
            tabBarBadgeStyle: {
              backgroundColor: '#05E4B5',
              maxWidth: 5,
              maxHeight: 8,
              borderRadius: 4,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
