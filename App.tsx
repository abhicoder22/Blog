import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import challengeScreen from './src/challenge';
import RenderScreen from './src/RenderScreen';
import {BlogProvider} from './src/Context/BlogContext';
import IndexScreen from './src/IndexScreen';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="challenge">
        <stack.Screen name="challenge" component={challengeScreen} />
        <stack.Screen name="render" component={RenderScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
