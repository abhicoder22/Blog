import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import PollButton from './Component/PollButton';

const ChalengeScreen = ({navigation}) => {
  const [fields, setFields] = useState([{value: null}]);
  const [fields1, setFields1] = useState([{value1: null}]);
  const [fields2, setFields2] = useState([{value2: null}]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd1() {
    const values = [...fields];
    values.push({value: null});
    setFields(values);
  }

  function handleAdd2() {
    const values1 = [...fields1];
    values1.push({value1: null});
    setFields1(values1);
  }

  function handleAdd3() {
    const values2 = [...fields2];
    values2.push({value2: null});
    setFields2(values2);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleRemove1(i) {
    const values1 = [...fields1];
    values1.splice(i, 1);
    setFields1(values1);
  }

  function handleRemove2(i) {
    const values2 = [...fields2];
    values2.splice(i, 1);
    setFields2(values2);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#A9A9A9',
      }}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
            Question Choice - Verticl List User to select one answer
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            You must select one Action Completion method
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            The power of chalenj is in the various Action completion methods.Get
            familiar with each one and share ideas for new ones using the above.
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginTop: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Choice - Vertical List User to select one answer
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <PollButton
              title="Poll Left Justification 1"
              onClick={() => {
                handleRemove2();
                handleRemove1();
                handleAdd1();
              }}
            />
          </View>

          {fields.map((field, idx) => {
            return (
              <View key={`${field}-${idx}`}>
                <TextInput
                  style={{
                    height: 100,
                    width: 340,
                    backgroundColor: 'white',
                    marginHorizontal: 5,
                    marginTop: 7,
                    borderRadius: 4,
                  }}
                  type="text"
                  placeholder="Enter text"
                  value={field.value}
                  onChangeText={text => handleChange(idx, text)}
                />
                {/* <Button title="sub" onPress={() => handleRemove(idx)} /> */}
              </View>
            );
          })}

          <View style={{flex: 1, marginTop: 5}}>
            <PollButton
              title="Poll Left Justification 2"
              onClick={() => {
                handleRemove();
                handleRemove2();
                handleAdd2();
              }}
            />
          </View>

          {fields1.map((field1, idx1) => {
            return (
              <View key={`${field1}-${idx1}`}>
                <TextInput
                  style={{
                    height: 100,
                    width: 340,
                    backgroundColor: 'white',
                    marginHorizontal: 5,
                    marginTop: 7,
                    borderRadius: 4,
                  }}
                  type="text"
                  placeholder="Enter text"
                  value={field1.value1}
                  onChangeText={text => handleChange(idx1, text)}
                />
                {/* <Button title="sub" onPress={() => handleRemove1(idx1)} /> */}
              </View>
            );
          })}

          <View style={{flex: 1, marginTop: 5}}>
            <PollButton
              title="Poll Left Justification 3"
              onClick={() => {
                handleRemove();
                handleRemove1();
                handleAdd3();
              }}
            />
          </View>

          {fields2.map((field2, idx2) => {
            return (
              <View key={`${field2}-${idx2}`}>
                <TextInput
                  style={{
                    height: 100,
                    width: 340,
                    backgroundColor: 'white',
                    marginHorizontal: 5,
                    marginTop: 7,
                    borderRadius: 4,
                  }}
                  type="text"
                  placeholder="Enter text"
                  value={field2.value2}
                  onChangeText={text => handleChange(idx2, text)}
                />
                {/* <Button title="sub" onPress={() => handleRemove2(idx)} /> */}
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('render')}
          style={{
            height: 45,
            width: 350,
            backgroundColor: '#b36200',
            justifyContent: 'center',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              textAlign: 'left',
              paddingLeft: 12,
              fontWeight: 'bold',
              color: 'white',
              fontSize: 15,
              alignSelf: 'center',
            }}>
            Tap To Complete
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChalengeScreen;
