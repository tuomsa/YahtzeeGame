import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator();



export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);


  const fetchFonts = async () => {
    await Font.loadAsync({
      'RubikBubbles' : require ('./assets/fonts/RubikBubbles-Regular.ttf'),

    });
    setFontLoaded(true);
  };
  

  useEffect(() => {
    fetchFonts();
  },[]);
  if (!fontLoaded) {
    
    return null;
  }

  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size }) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = focused
            ? 'home-variant'
            : 'home-outline'
          }
          else if (route.name === 'Gameboard') {
            iconName = focused
            ? 'gamepad-variant'
            : 'gamepad-variant-outline'
          }
          else if (route.name === 'Scoreboard' ) {
            iconName = focused
            ? 'ballot'
            : 'ballot-outline'
          }
          return <MaterialCommunityIcons
          name={iconName}
          size={size}
          color={color}
          />
        },
        tabBarActiveTintColor:'steelblue',
        tabBarInactiveTintColor:'grey'
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: {display: "none"}
         
        }}
      />
      <Tab.Screen
        name="Gameboard"
        component={Gameboard}
      />
      <Tab.Screen
        name="Scoreboard"
        component={Scoreboard}
      />
    </Tab.Navigator>
    </NavigationContainer>
  )};
