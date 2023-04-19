import React, {Component ,} from 'react';
import {StyleSheet,SafeAreaView} from 'react-native';
import {Text, View, ScrollView, TextInput,Category, Textarea, Image,Button, TouchableHighlight,FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import Style1 from '../Composant/Style';
import categories from './categories';
import COLORS from './colors';


import Icon from 'react-native-vector-icons/MaterialIcons';
import Blog from './Blog';
import Details from './Details';


const Cblog = ({navigation ,route}) => {
  const item = route.params;
 

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.img1}
                  style={{height: 30, width: 30, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>

                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style={Style1.header}>
    <View
          style={{ 
            flex : 1,

            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            
          }}>
          <ImageBackground source={require('../image/logo3.jpg')} style={{height: '110%', width: '110%',}} >
            <View style={style.iconContainer}>
            <Icon name="arrow-back-ios" size={25} onPress={navigation.goBack} />
            </View>

          </ImageBackground>
          <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 20, margin :20}}>
            Ajouter une image
          </Text>
        </View>
            </View>
      <View style ={{margin:10}} >
        <ListCategories />
      </View>
      <View style={{flex:1,justifyContent:'center',textAlign:'center',}}>
        <Text>
          Titre du blog
        </Text>
        <TextInput
          style={Style1.inputContainer}
          placeholderTextColor={COLORS.secondary}
          placeholder="Examen Devloppement Web 2022"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={{margin:10}}>
        <Text>
          Description
        </Text>
        <TextInput
        style={Style1.textarea}
        placeholderTextColor={COLORS.secondary}
        placeholder=""
          
        onChangeText={(text) => console.log(text)}
        />
        </View>

      <View  style={{flex:1,justifyContent:'center',textAlign:'center',margin:10}}>
       <TouchableOpacity
       style={Style1.button}
       onPress={() => navigation.navigate('Blogs')}>
          <Text style={{color: COLORS.secondary, fontWeight: 'bold', fontSize: 20,justifyContent:'center',textAlign:'center'}}>
            Creer une blog
            </Text>
       </TouchableOpacity>

      </View>


     
       
    </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: 190,
    marginHorizontal: 5,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,

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
 
});

export default Cblog;
