import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Pantalla extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        
        <Content padder contentContainerStyle ={styles.content}>
          
            <CardItem>
              <Text>{this.props.route.params.user}</Text>
            </CardItem>
            <CardItem>
              <Text>{this.props.route.params.pass}</Text>
            </CardItem>
            
          
        </Content>
      </Container>
  );
}
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Pantalla;