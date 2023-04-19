import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import 
Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Screen/Home';
import Login from './Composant/Login';
import Inscrire from './Screen/Inscrire';
import Cblog from './Screen/Cblog';
import Details from './Screen/Details';
import Blogs from './Screen/Blogs';
import Favoris from './Screen/Favoris';





//import SettingsScreen from './Screen/Settings';
//import Categorie from './page/Categorie';


//const Tab = createBottomTabNavigator();

function LoginStack() {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login} />

      
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={Home} />
    </Stack.Navigator>
  );
}
function InscrireStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}>
       <Stack.Screen
        name="Inscrire"
        component={Inscrire} />
    </Stack.Navigator>
  );
}
function DetailsStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}>
       <Stack.Screen
        name="Details"
        component={Details} />
    </Stack.Navigator>
  );
}

function CblogStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
       <Stack.Screen
        name=" Cblog"
        component={ Cblog } />
        
    </Stack.Navigator>
  );
}
function BlogsStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
       <Stack.Screen
        name=" Blogs"
        component={ Blogs } />
        
    </Stack.Navigator>
  );
}
function FavorisStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
       <Stack.Screen
        name=" Favoris"
        component={ Favoris } />
        
    </Stack.Navigator>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inscrire" component={Inscrire} />
        <Stack.Screen name="Cblog" component={Cblog} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Favoris" component={Favoris} />


      </Stack.Navigator>
    </NavigationContainer>
  
  
  );




}

export default App;