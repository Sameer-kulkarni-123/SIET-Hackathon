import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const FormField123 = ({title, value, containerStyles, handleChangeText, placeHolder, mainView, keyboardType}) => {
  return (
    <View className={`justify-center ${mainView}`}>
      <View className="ml-9">
        <Text className="font-rregular">{`${title}`}</Text>
      </View>

        <View className={containerStyles}>
          <TextInput
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="white"
          onChangeText={handleChangeText}
          secureTextEntry={title==="Password" || title==="Confirm Password"?true:false}
          keyboardType={keyboardType}

          />
        </View>


    </View>
  )
}

export default FormField123