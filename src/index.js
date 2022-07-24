import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import CounterComponent from './counterComponent';
import store from './store/store';
// import CounterClassComponent from './counterClassComponent';

function App() {
    return (
        <Provider store={store}>
             <CounterComponent /> 
            {/* <CounterClassComponent/> */}
            
        </Provider>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

export default App;

