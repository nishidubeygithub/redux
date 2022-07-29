import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,

} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser} from './action/action';
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CounterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
const [dateofbirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDOB] = useState('');
  const [selectedUserIndex, setSelectedUserIndex] = useState(undefined);
  const [mobileno, setMobileno] = useState('');
  
  const [skill, setSkill] = useState('');
  const dispatch = useDispatch();

  const userList = useSelector(state => state.user.userList);
  

  const UpdateData = () => {
    // console.log('skill-->', skill);
    // return
    if (selectedUserIndex !== undefined) {
      dispatch(
        updateUser(
          {
            name: name,
            dob: dob,
            email: email,
            password: password,
            mobileno: mobileno,
            skill: skill.split(','),
          },
          selectedUserIndex,
        ),
      );
    } else {
      dispatch(
        addUser({
          name: name,
          dob: dob,
          email: email,
          password: password,
          mobileno: mobileno,
          skill: skill.split(','),
        }),
      );
    }
    setName('');
    setDOB('');
    setEmail('');
    setPassword('');
    setMobileno('');
    setSkill('');
    setSelectedUserIndex(undefined);
  }
  const onPressUser = (item, index) => {
    setName(item.name);
    setDOB(item.dob);
    setEmail(item.email);
    setPassword(item.password);
    setMobileno(item.mobileno);
    setSkill(item.skill.toString());
    setSelectedUserIndex(index);
  };
  
   const calculate_age = dob => {
    console.log(dob);
    const dobArr = dob.split('/');
    // console.log(dobArr);
    const birth_day = dobArr[0], birth_month = dobArr[1], birth_year = dobArr [2]
    const start_date = new Date();
    const start_year = start_date.getFullYear();
    const start_month = start_date.getMonth();
    const start_day= start_date.getDate();
    const age = start_year - birth_year;
    if (start_month < birth_month - 1)
    {
      age --;
    }
    if (birth_month - 1 == start_month && start_day < birth_day)
    {
      age --;
    }
    return age;
    }
 

  const renderItem = ({item, index}) => {
     return (
        <View>
      <TouchableOpacity onPress={() => onPressUser(item, index)}>
        
          <Text>{`Name:- ${item.name}`}</Text>
          <Text>{`Email:- ${item.email}`}</Text>
          <Text>{`Password:- ${item.password}`}</Text>
          <Text>{`Age:- ${calculate_age(item.dob)}`}</Text>
          <Text>{`Mobileno:- ${item.mobileno}`}</Text> 
           <Text>{'Skill:-'}</Text>
           <View style={styles.skill}> 
          
         {item.skill.map((item, index) =>(
            <Text key={index} style={styles.skillTest}>{item}</Text>
            
           ))} 
        </View>  
       
      </TouchableOpacity>
      </View>
     )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Form</Text>
      <TextInput
        style={styles.placeholder}
        placeholder="Enter Name"
        value={name}
        onChangeText={val => setName(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Enter Email"
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Enter Password"
        value={password}
        onChangeText={val => setPassword(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Enter dob"
        keyboardType="numeric"
        value={dob}
        onChangeText={val => setDOB(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Mobile no"
        keyboardType="numeric"
        value={mobileno}
        onChangeText={val => setMobileno(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Enter Skill"
        value={skill}
        onChangeText={val => setSkill(val)}
      />
      <Button
        title={selectedUserIndex !== undefined ? 'Update' : 'Submit'}
        onPress=
        // {CalculateAge}
        {UpdateData}
      />
      <FlatList data={userList} renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
      
  
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 18,
    marginTop: 80,
    marginLeft: 20,
    textAlign: 'center',
  },
  txt: {
    fontSize: 15,
    marginRight: 10,
    margin: 2,
    marginTop: 50,
    textAlign: 'center',
  },
  placeholder: {
    borderWidth: 1,
    width: 350,
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
    borderRadius: 6,
    margin: 10,
    marginTop: 20,
  },
  view: {
    alignItems: 'center',
    borderRadius: 2,
  },
  skill:{
    flexDirection:'row', 
    alignItems:"center"
  },
  skilltext: {
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 8,
  },
});
