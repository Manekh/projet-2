import React from 'react';
import {StyleSheet,SafeAreaView} from 'react-native';
import {Text, View, ScrollView, TextInput,Category, Image,Button, TouchableHighlight,FlatList,TouchableOpacity} from 'react-native';
import Style1 from '../Composant/Style';
import categories from './categories';
import COLORS from './colors';
import { AsyncStorage } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import Blog from './Blog';
import Details from './Details';
import Cblog from './Cblog';


  

const Home = ({navigation}) => {
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
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
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


const saveFavorite = async (item) => {
  try {
    await AsyncStorage.setItem('favorite', JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

  const Card = ({Blog}) => {
    return (
      
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details',Blog)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', }}>
          <Image source={Blog.image} style={{height: 120, width: '100%',borderRadius:20}} />
          </View>
          <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{Blog.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey, marginTop: 1}}>
              {Blog.Date}
            </Text>
          </View>
          <View
            style={{
              marginTop: 4,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text></Text>
            <View style={style.favBtn}>
              <Icon name="favorite" size={25} color={COLORS.white}/>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <View style={Style1.header}>
      <View style={{}}>
              <Text style={Style1.text1} >TDSI</Text>
              <Text style={Style1.text2}>Blog</Text>
      </View>
      <View style={{flexDirection: 'row' }}>
                <Text style={Style1.text1}  onPress={navigation.goBack}>Se Deconecter</Text>
                <Icon name="arrow-back" size={30} color={COLORS.primary} onPress={navigation.goBack} />
                
                </View>
            </View>
            
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Blog}
        renderItem={({item}) => <Card Blog={item} />}
      />
        <View style={style.footBtn}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Cblog')}>
              <Icon name="add" size={30} color={COLORS.white} />
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
  favBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footBtn: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft :'80%',
 },
});

export default Home;
