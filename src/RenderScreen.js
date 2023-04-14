import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  string,
} from 'react-native';

const RenderScreen = ({navigation}) => {
  const [fields, setFields] = useState([{value: null}]);

  const [textValue, setTextValue] = useState('');
  const [numInputs, setNumInputs] = useState(1);

  function handleChange(i, event) { 
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({value: null});
    setFields(values);
  }
  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={() => handleAdd()}
        style={{
          height: 45,
          width: 350,
          backgroundColor: '#ff7f50',
          justifyContent: 'center',
          borderRadius: 4,
        }}>
        <Text
          style={{
            textAlign: 'left',
            paddingLeft: 12,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 15,
          }}>
          Render
        </Text>
      </TouchableOpacity>

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
          </View>  
        );
      })}
    </View>
  );
};
export default RenderScreen;
