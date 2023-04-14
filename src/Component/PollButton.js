import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';

const PollButton = ({title, onClick}) => {
  const [fields, setFields] = useState([{value: null}]);

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

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  //   function AddText() {
  //     return (
  //       <View style={{height: 40, width: 300}}>
  //         <TextInput placeholder="enter text"></TextInput>
  //       </View>
  //     );
  //   }

  return (
    <View>
      <TouchableOpacity
        onPress={() => onClick()}
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
          {title}
        </Text>
      </TouchableOpacity>

      {/* {fields.map((field, idx) => {
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
            <Button title="sub" onPress={() => handleRemove(idx)} />
          </View>
        );
      })} */}
    </View>
  );
  return [setFields];
};

export default PollButton;
