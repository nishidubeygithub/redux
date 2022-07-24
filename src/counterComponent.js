import React, {useState} from 'react';
import {FlatList,StyleSheet,Text, TextInput, Button, View, TouchableOpacity, Modal} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from './action/action';
// import { setName, setEmail, setPassword, setAge, setMobileno, setEmployeeId } from './action/action';

export default function CounterComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [mobileno, setMobileno] = useState ('');
    const [isVisible, setVisible] = useState (false)

    const dispatch = useDispatch();
    // const counterReducer = useSelector(state => state.counter.counterReducer);
    const userList = useSelector(state => state.user.userList);
    // const email = useSelector(state => state.counter.email);
    // const password = useSelector(state => state.counter.password);
    // const age = useSelector(state => state.counter.age);
    
     const UpdateData = () => {
        dispatch(addUser ({name:name,
        age:age,
        email:email,
        password:password,
        mobileno:mobileno,
        employeeId:employeeId
    }))
         };
         const ClearForm = () => {
            setVisible(false)
            setName("")
            setEmail("")
            setPassword("")
            setEmployeeId("")
            setAge("")
            setMobileno("")
         }


        const renderItem = ({item}) => {
          return (
<View style ={styles.item}>
    <Text>{item.name}</Text>
    <Text>{item.email}</Text> 
    <Text>{item.password}</Text>
    <Text>{item.employeeId}</Text>
    <Text>{item.age}</Text>
    <Text>{item.mobileno}</Text>
   
    
    </View>
          )
        }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registration Form</Text>
            
                <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Name'
                    value={name}
                    onChangeText={val =>setName(val)}
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Email'
                    value={email}
                    onChangeText={val =>setEmail(val)}
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Password'
                    value={password}
                    onChangeText={val =>setPassword(val)}
                    />
                <TextInput 
                    style={styles.placeholder}
                    placeholder='Employee Id'
                    keyboardType='numeric'
                    value={employeeId}
                    onChangeText={val =>setEmployeeId(val)}
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Enter Age'
                    keyboardType='numeric'
                    value={age}
                    onChangeText={val =>setAge(val)}
                    />
                    <TextInput 
                    style={styles.placeholder}
                    placeholder='Mobile no'
                    keyboardType='numeric'
                    value={mobileno}
                    onChangeText={val =>setMobileno(val)}
                    />
                <Button title ="Submit" onPress={UpdateData} 
                />
                <View style={styles.view}>
                <TouchableOpacity
                onPress={() => setVisible(!isVisible)}>
                <FlatList data={userList}
                renderItem={renderItem}/>
               
                 </TouchableOpacity> 
                </View>
                <Modal animationType ={"slide"}
                visible = {isVisible}> 
    
              <View style={styles.container}>
            <Text style ={styles.txt}>{name}</Text>
            <Text style ={styles.txt}>{email}</Text>
            <Text style ={styles.txt}>{password}</Text>
            <Text style ={styles.txt}>{employeeId}</Text>
            <Text style ={styles.txt}>{age}</Text>
            <Text style ={styles.txt}>{mobileno}</Text>
            <Button title="Close Model" onPress ={ClearForm}/>
             </View>
         </Modal>
                
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    text:{
        fontSize:18,
        marginTop:80,
        marginLeft:20,
        textAlign:'center'
    },
    txt:{
        fontSize:15,
        marginRight:10,
        margin:2,
        marginTop:50,
        textAlign:'center'
    },
 placeholder:{
    borderWidth: 1,
    width: 350,
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
    borderRadius:6,
    margin: 10,
    marginTop:20
   },
   view:{
alignItems:'center',
borderRadius:2
   }

});