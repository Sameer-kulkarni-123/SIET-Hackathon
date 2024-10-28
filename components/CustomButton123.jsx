//DO NOT RENAME THIS FILE TO "CustomButton"

import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, containerStyles, textStyles, handlePress, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${containerStyles} ${isLoading?"opacity-10":""}`}
      disabled={isLoading}

    >
      <Text className={`${textStyles}`}>
        {`${title}`}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton