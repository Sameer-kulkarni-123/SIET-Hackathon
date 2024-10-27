import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View>
      <Text>home</Text>
    </View>
    </SafeAreaView>
  )
}

export default home