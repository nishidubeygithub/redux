import React from 'react';
import {
    StyleSheet,
    Text, TextInput, Button,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { setName, setEmail, setPassword, setAge } from './action/action';


class CounterClassComponent extends React.Component {
UpdateData = () =>{
    if (this.state.setEmail==""){
        alert("success")
    }
    else if (this.state.setName==""){
        alert('done')
    }
    else if (this.state.setAge==""){
        alert('true')
    }
    else{
        alert('successfull')
    }
    }
    
    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Registration Form</Text>
                <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Name'
                    onChangeText ={(value) =>this.state.setName(value) }
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Email'
                    onChangeText={(value)=>this.state.setEmail(value)}
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Password'
                    onChangeText={(value)=>this.state.setPassword(value)}
                    />
                <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Age'
                    keyboardType='numeric'
                    onChangeText={(value)=>this.state.setAge(value)}
                    />
                <Button title ="Submit" onPress={this.UpdateData} />
        </View>
    );
};
}
function mapStateToProps(state) {
    return { 
        name: state.counter.name }
      return  {email: state.counter.email }
      return  {password: state.counter.password }
      return  {age: state.counter.age }
}



const mapDispatchToProps = {
    setName: setName,
    setEmail: setEmail,
    setPassword: setPassword,
    setAge: setAge
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterClassComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
     justifyContent: 'center',
     alignItems:'center'
    },
    text:{
        fontSize:18
    },
 placeholder:{
    borderWidth: 1,
    width: 200,
    height: 40,
    fontSize: 15,
    padding: 10,
    paddingLeft: 20,
    margin: 20,
   }

});