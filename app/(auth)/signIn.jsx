import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View, SafeAreaView, StatusBar } from "react-native";
import CustomButton from "../../components/CustomButton123";
import FormField from "../../components/FormField123";
import { useState } from "react";

export default function Index() {

  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const submit = () => {
    router.push("/(tabs)/home")
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-48 items-center justify-center">
        <Text className="text-center font-rbold text-5xl ">
          Sign In
        </Text>
      </View>

      <View className="mt-36">
        <FormField
          mainView="mt-10"
          title="Email"
          value={`${form.email}`}
          containerStyles="w-[30vh] bg-gray-400 justify-center px-4 py-2 mt-2 ml-[80px]"
          handleChangeText={(e) => {setform({...form, email: e})} }
          placeHolder="Enter your email"
          keyboardType="email"
        />

        <FormField
          mainView="mt-10"
          title="Password"
          value={`${form.password}`}
          containerStyles="w-[30vh] bg-gray-400 justify-center px-4 py-2 mt-2 ml-[80px]"
          handleChangeText={(e) => {setform({...form, password: e})} }
          placeHolder="Enter your password"
          keyboardType="password"
        />
      </View>

      <View className="items-center justify-end flex-1 mb-36">
        <CustomButton 
          handlePress={submit}
          title="Sign In"
          containerStyles="bg-[#816EB4] rounded-2xl"
          textStyles="px-7 py-4 text-2xl font-rmedium"
        />
        <View className="flex-row mt-5">
          <Text className="font-rregular text-[16px]">Don't have a account? </Text>
          <Link href="signUp" className="font-rbold text-[16px]">Sign Up</Link>
        </View>
      </View>
      <StatusBar barStyle="dark-content"/>
    </SafeAreaView>
  );
}
