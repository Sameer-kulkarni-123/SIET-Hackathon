import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton123'

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="absolute bottom-[150px]">
        <CustomButton
          title="Continue to sign in"
          containerStyles="rounded-2xl bg-[#816EB4]"
          textStyles="px-7 py-6 text-xl font-rmedium"
          handlePress={()=>{
            router.push("/(auth)/signIn")
          }}
        />
      </View> 
      <StatusBar barStyle="dark-content"/>
    </SafeAreaView>
  )
}

export default index
