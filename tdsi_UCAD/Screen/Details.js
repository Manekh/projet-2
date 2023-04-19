import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TextInput,SafeAreaView,ScrollView,ImageBackground, Image, TouchableHighlight} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Style1 from '../Composant/Style';
import COLORS from './colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';

import Cart from './Blogs';


const Details = ({navigation, route}) => {
  const item = route.params;
  

  return (
    <SafeAreaView style={{backgroundColor:COLORS.white}}>
     
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
            
          }}>
          <ImageBackground source={item.image} style={{height: '110%', width: '100%',borderRadius:20
        }} >
            <View style={style.iconContainer}>
            <Icon name="arrow-back-ios" size={25} onPress={navigation.goBack} />
            </View>
          </ImageBackground>

        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} onPress = {() => navigation.navigate('Favoris')} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
 
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin:30

  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default Details;
