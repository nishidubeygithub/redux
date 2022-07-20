// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrementAction, incrementAction } from './action/action';

// export default function CounterComponent() {
//     const dispatch = useDispatch();
//     const count = useSelector(state => state.counter.count);

//     return (
//         <View style={styles.container}>
//             <View style={styles.innerContainer}>

//                 <TouchableOpacity onPress={() => dispatch(incrementAction(count + 1))} style={styles.buttonStyle}>
//                     <Text style={styles.buttonTextStyle}>+</Text>
//                 </TouchableOpacity>
                
//                 <Text style={styles.counterText}>{count}</Text>
                
//                 <TouchableOpacity onPress={() => dispatch(decrementAction(count - 1))} style={styles.buttonStyle}>
//                     <Text style={styles.buttonTextStyle}>-</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'olive',
//         justifyContent: 'center'
//     },
//     innerContainer: {
//         flexDirection: 'row',
//         alignSelf: 'center',
//         alignItems: 'center'

//     },
//     buttonStyle: {
//         backgroundColor: 'white',
//         marginHorizontal: 20,
//         width: 40,
//         height: 40,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 40
//     },
//     counterWrapper: {
//     },
//     buttonTextStyle: {
//         fontSize: 30
//     },
//     counterText: {
//         fontSize: 48
//     }
// });

import React from 'react';
import {
    StyleSheet,
    Text, TextInput, Button,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from './action/action';

export default function CounterComponent() {
    const dispatch = useDispatch();
    const {name, age} = useSelector(state => state.counterReducer);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registration Form</Text>
              <TextInput placeholder = "Enter your name"
              style={styles.placeholder}
              value={name}
            onChangeText={(value) => dispatch(setName(value))}/> 
              <TextInput placeholder = "Enter your age"
              style={styles.placeholder}
              value={age}
              keyboardType='numeric'
              onChangeText={(value) => dispatch(setAge(value))}/>
              <Button title ="Submit" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
     justifyContent: 'center',
     alignItems:'center'
    },
    placeholder:{
        borderWidth:1,
        height:40,
        width:200,
        padding:20,
        margin:20
    }

});