import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View, Modal,
  TouchableOpacity,

} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser} from './action/action';
import DatePicker from 'react-native-date-picker';
// import DatePicker from 'react-native-modern-datepicker';

 export default function CounterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [selectedUserIndex, setSelectedUserIndex] = useState(undefined);
  const [mobileno, setMobileno] = useState('');
  const [open, setOpen] = useState(false)
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
            age: age,
            email: email,
            password: password,
            skill: skill.split(','),
          },
          selectedUserIndex,
        ),
      );
    } 
    else {
      dispatch(
        addUser({
          name: name,
          dob: dob,
          age: age,
          email: email,
          password: password,
          skill: skill.split(','),
        }),
      );
    }
    setName('');
    setDOB('');
    setEmail('');
    setAge('');
    setPassword('');
    setSkill('');
    setSelectedUserIndex(undefined);
  }
  const onPressUser = (item, index) => {
    setName(item.name);
    setDOB(item.dob);
    setAge(item.age);
    setEmail(item.email);
    setPassword(item.password);
    setSkill(item.skill.toString());
    setSelectedUserIndex(index);
  };
  
   const calculate_age = dob => {
    
    
      var today = new Date();
      var birthDate = new Date(dob); 
      // console.log(birthDate) 

      var age_now = today.getFullYear() - birthDate.getFullYear();
      var month = today.getMonth() - birthDate.getMonth();
      // var today_mnth = today.getMonth()+1;
      // var birth_mnth = birthDate.getMonth()+1;
      // console.log("todaymnth")
      // console.log(today_mnth)
      // console.log(birth_mnth)
      
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age_now--;
      }
      // if(today_mnth > birth_mnth){
      //   var mnth = today_mnth - birth_mnth
      // }else{
      //   if(today_mnth < birth_mnth){
      //     var mnth = 12 - birth_mnth + today_mnth
           
      //   }
      //   else{
      //     if(today_mnth = birth_mnth){
      //       var mnth = 0;
      //     }
      //   }
      // }
      // var mnth = 3;

      // var xyz = age_now + "years " + mnth + "months";
      // console.log(xyz)
      
      console.log(age_now);
      // console.log(mnth);
      // setAge(age_now);
      // console.log(age);

      return age_now;
    }

  
    
  //   const dobArr = dob.split('/');
  //   console.log(dobArr);
  //   const birth_day = dobArr[0], birth_month = dobArr[1], birth_year = dobArr[2];
  //   const start_date = new Date();
  //   const start_year = start_date.getFullYear();
  //   const start_month = start_date.getMonth();
  //   const start_day= start_date.getDate();
  //   const age = start_year - birth_year;
  //   if (start_month < birth_month - 1)
  //   {
  //     age --;
  //   }
  //   if (birth_month - 1 == start_month && start_day < birth_day)
  //   {
  //     age --;
  //   }
  //   return age;
  //  }
 
// console.log(dob)
  const renderItem = ({item, index}) => {
     return (
        <View>
      <TouchableOpacity onPress={() => onPressUser(item, index)}>
        
          <Text>{`Name:- ${item.name}`}</Text>
          <Text>{`Email:- ${item.email}`}</Text>
          <Text>{`Password:- ${item.password}`}</Text>
          <Text>{`Age:- ${calculate_age(item.dob)}`}</Text>
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
        placeholder="Enter Skill"
        value={skill}
        onChangeText={val => setSkill(val)}
      />
      <TextInput
        style={styles.placeholder}
        placeholder="Enter Age"
        value={age}
        onChangeText={val => setAge(val)}
        onPressIn={() => setOpen(true)}
      />
    
    {/* <TouchableOpacity onPress={() => setOpen(true)} >
        <Text style={styles.placeholder} > Select a date  */}

        <DatePicker
        modal
        open={open}
        date={dob || new Date()}
        //value={date}
        mode="date"
        placeholder="Please select Date Month Year"
        format="DD/MM/YYYY"
        onDateChange={(dob) =>  {setDOB(dob)}}

        onConfirm={(dob) => {
          // console.log(dob)
          calculate_age(dob)
          setOpen(false)
          setDOB(dob)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
       {/* </Text>  */}
      {/* </TouchableOpacity>
       */}
       
      <Button
        title={selectedUserIndex !== undefined ? 'Update' : 'Submit'}
        onPress={UpdateData}
      />
      <FlatList data={userList} renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
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
