import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="signIn">
        LINK
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})