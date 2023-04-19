import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../Screen/colors';

const styles = StyleSheet.create({
  viewGlobal: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header:{
    margin:10,
    flexDirection: 'row', 
    justifyContent:'space-between'

  },
  text1:{
    color:'black',fontSize:20,fontWeight:'bold'
  },
  textb1:{
    color:'black',fontSize:15,fontWeight:'bold'
  },
  textb2:{
    color:'black',fontSize:15,fontWeight:'bold'
  },
  textb3:{
    color:'black',fontSize:15,fontWeight:'bold'
  },
  textb4:{
    color:'black',fontSize:15,fontWeight:'bold',
  },
  textb5:{
    color:'black',fontSize:15,fontWeight:'bold'
  },
  textb6:{
    color:'black',fontSize:15,fontWeight:'bold'
  },
  text2:{
    color:'yellow',fontSize:15,fontWeight:'bold'
  },

  img1: {
    width: '100%',
    height: '80%',
    margin:3 ,
    borderRadius:20,

  },

  img2: {
    width: '100%',
    height: '60%',
    marginTop:30 ,
    borderRadius:20,
    

  },
  img3: {
    width: '100%',
    height: '80%',
    borderRadius:20,
    

  },
  img4: {
    width: '100%',
    height: '60%',
    borderRadius:20,
    
    

  },
  img5: {
    width: '100%',
    height: '90%',
    borderRadius:20,
    

  },

flate:{
  backgroundColor:'red',
  display:'flex',
  flexWrap:'wrap',
  

  
},

boxContainer:{
  width:'100%',
  height:800,
  padding:5,
  flexWrap:'wrap',
  //backgroundColor:'red'
   },
  
  


box:{
width:'50%',
height:'30%',
padding:10,
//backgroundColor:'grey',
margin:1,
borderRadius:23


 },
inner:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  
},

  loginInput: {
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: '#440F7F',
    margin: 10,
    borderRadius:20
  },
  inputContainer : {
    width: 250,
    height: 40,
    borderWidth: 2,
    borderColor: '#440F7F',
    margin: 10,
    borderRadius:10
  },
  button:{
    width: '97%',
    height: 40,
    borderWidth: 2,
    borderColor: '#440F7F',
    margin: 5,
    borderRadius:10,
    backgroundColor:COLORS.primary
  }
  ,
  textarea:{
    width: '100%',
    height: 280,
    borderWidth: 2,
    borderColor: '#440F7F',
    margin: 5,
    borderRadius:3
  },
  btnLogin: {
    width: 200,
    height: 38,
    backgroundColor: '#440F7F',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  },
  btn1Login: {
    width: 250,
    height: 38,
    backgroundColor: '#440F7F',
    margin:5 ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  },
  textLogin: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  img: {
    width: 130,
    height: 130,
    borderColor: '#440F7F',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 65,
  },
  ajoutInput: {
    margin: 10,
    borderWidth: 2,
    width: 300,
    height: 40,
    borderColor: '#440F7F',
    padding: 5,
  },
  btnAjout: {
    width: 130,
    height: 38,
    backgroundColor: '#7C3FC0',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ligne: {
    backgroundColor: '#440F7F',
    margin: 5,
    width:100,
    height: 30,
    alignItems: 'center', 
    flexDirection:'row',
    borderRadius:30
   },
  Title1:{
    color: 'white', fontSize: 20, fontWeight: 'bold', width: '100%',justifyContent:'center',textAlign:'center'
  },
  textid: {
    width: 50,
  },
  textNom: {
    width: 100,
  },
  ligneEntete: {
    backgroundColor: '#441E6E',
    width: '100%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'block',
    padding: 5,
  },
  entete: {color: 'white', fontSize: 16, fontWeight: 'bold', width: 50},
  //enteteImg: {color: 'white', fontSize: 16, fontWeight: 'bold', width: 60},

  //nteteNom: {color: 'white', fontSize: 16, fontWeight: 'bold', width: 100},
  //imgUser: {width: 45, height: 45, margin: 10},
  //titre: {color: 'red', fontWeight: 'bold', fontSize: 26, marginBottom: 55},
  btnHome: {
    width: 200,
    height: 55,
    backgroundColor: '#5F3093',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textHome: {color: 'white', fontSize: 14, fontWeight: '800'},
});

module.exports = styles;
