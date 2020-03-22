import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View, Alert} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';
import api from '../data/api';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nomusu:'',
      pass:''
    }
  }

  
  login = async() => {
    let validarLog = await api.validarLog(this.state.nomuser,this.state.pass)

    if(validarLog.status == 1){
      this.props.navigation.navigate('Prueba');
    }else{
      Alert.alert('Usuario o clave inválidos');
    }
  }
  

render(){
  const navegar=this.props.navigation;

  return (
    <Container>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' 
                  onChangeText={(nomuser) => this.setState({nomuser})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' 
                  onChangeText={(pass) => this.setState({pass})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton} onPress={this.login}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
          <Text style={misEstilos.textCenter}>No tienes cuenta:</Text>
          <Button onPress={() => {navegar.navigate('Registro',{titulo:'Registro de usuarios'});}}><Text  style={misEstilos.textCenter}>Registrate</Text></Button>
        </Content>
      </Container>
  );
}
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{
    marginLeft: '70%',
  },
  boton2:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer :{
    justifyContent: 'center',
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#00000040'
  } ,
  activityIndicatorWrapper : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});

export default Login;


