 import React, { useState } from 'react';
import {Text, View, TextInput,SafeAreaView,ScrollView,ImageBackground, Image, TouchableHighlight} from 'react-native';
import {StyleSheet} from 'react-native';
import {AsyncStorage} from 'react-native';

import Style1 from '../Composant/Style';
import categories from './categories';
import COLORS from './colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Blog from './Blog';
import Details from './Details';




const Favoris = ({navigation,route}) => {
    const item = route.params;

    const Favoris = async () => {
        try {
            const value = await AsyncStorage.getItem('Card');
            const user = JSON.parse(value);
            if (Blog.id === item.id) {
                await AsyncStorage.removeItem('Card');
                navigation.navigate('Home');
            }
            else {
                await AsyncStorage.setItem('Card', JSON.stringify(item));
                navigation.navigate('Home');
            }
            console.log(item.id);

            return;
            } catch (error) {
                console.log(error);
            }

            return;
        };
        return (
            <SafeAreaView style={Style1.container}>
                <ScrollView>
                    <View style={Style1.container}>
                    <Text></Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )





    };








export default Favoris;