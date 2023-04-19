import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TextInput, Image, TouchableHighlight} from 'react-native';
import Style1 from './Style';



export default class Login extends Component {
constructor(props){
  super(props)
  this.state={
    utilisateur:'',
    motpass:''
  }
}


  render() {
    return (
      <View style={Style1.viewGlobal}>
        <Image
          style={Style1.img}
          source={require('../image/logo.jpg')}
        />
        <TextInput
          style={Style1.loginInput}
          placeholder={'Nom utilisateur'}
          value={this.state.utilisateur}
          onChangeText={(text)=>this.setState({utilisateur:text})}

        />

        <TextInput
          style={Style1.loginInput}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
          value={this.state.motpass}
          onChangeText={(text)=>this.setState({motpass:text})}

        />
        <TouchableHighlight
          style={Style1.btnLogin}
          onPress={ () => this.props.navigation.navigate('Home')}>
          <Text style={Style1.textLogin}>
            SE CONNECTER
          </Text>
        </TouchableHighlight>
       <View style = {{ width:'100%', margin:150 ,justifyContent:'center' ,TextAlign:'center',alignItems:'center'}}>
       <Text style={Style1.text1}>vous n'etes pas encore membre</Text>
        <TouchableHighlight
          style={Style1.btn1Login}
          onPress={ () => this.props.navigation.navigate('Inscrire')}>
          <Text style={Style1.textLogin}>
            S'INSCRIRE
          </Text>
        </TouchableHighlight>
       </View>
      </View>
    );
  }
}
