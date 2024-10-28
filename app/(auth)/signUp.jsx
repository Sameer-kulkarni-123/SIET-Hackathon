import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton123";
import FormField from "../../components/FormField123";
import { useState } from "react";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import db from '@react-native-firebase/database';
import { Alert } from 'react-native';

export default function Index() {

  const db = database();


  const [form, setform] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [loadState, setloadState] = useState(false);

  const createProfile = async (response, username) => {
    db.ref(`/users/${response.user.uid}`).set({ username });
  }

  const submit = async () => {
    if(form.password!==form.confirmPassword){
      Alert.alert("Error","The passwords don't match");
    }
    if(form.username && form.email && form.password && (form.password===form.confirmPassword)){
      try{
        setloadState(true)
        const response = await auth().createUserWithEmailAndPassword(
          form.email,
          form.password,
        )
        
        if(response.user){
          setloadState(false);
          await createProfile(response, form.username);
          router.push("/(tabs)/home");
        }
        
      }
      catch (error) {
        setloadState(false);
        console.error("Firebase error: ", error);
        if (error.code === 'auth/invalid-email') {
          Alert.alert("Invalid Email", "Please enter a valid email address.");
        } else if (error.code === 'auth/weak-password') {
          Alert.alert("Weak Password", "Password should be at least 6 characters.");
        } else if (error.code === 'auth/email-already-in-use') {
          Alert.alert("Email In Use", "This email is already associated with an account.");
        } else {
          Alert.alert("Oops", "Please try again.");
        }
      }
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
      <View className="mt-48 items-center justify-center">
        <Text className="text-center font-rbold text-5xl ">
          Sign Up
        </Text>
      </View>

      <View className="">
        <FormField
          mainView="mt-10"
          title="Username"
          value={`${form.username}`}
          containerStyles="w-[30vh] bg-gray-400 justify-center px-4 py-2 mt-2 ml-[80px]"
          handleChangeText={(e) => {setform({...form, username: e})} }
          placeHolder="Enter your username"
          // keyboardType="email"
        />

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
        <FormField
          mainView="mt-10"
          title="Confirm Password"
          value={`${form.confirmPassword}`}
          containerStyles="w-[30vh] bg-gray-400 justify-center px-4 py-2 mt-2 ml-[80px]"
          handleChangeText={(e) => {setform({...form, confirmPassword: e})} }
          placeHolder="Confirm your password"
          keyboardType="password"
        />
      </View>

      <View className="items-center justify-end flex-1 mt-12">
        <CustomButton 
          handlePress={submit}
          title="Sign Up"
          containerStyles="bg-[#816EB4] rounded-2xl"
          textStyles="px-7 py-4 text-2xl font-rmedium"
          isLoading={loadState}
        />
        <View className="flex-row mt-5">
          <Text className="font-rregular text-[16px]">Already have a account? </Text>
          <Link href="signIn" className="font-rbold text-[16px]">Sign In</Link>
        </View>
      </View>
      </ScrollView>
      <StatusBar barStyle="dark-content"/>
    </SafeAreaView>
  );
}
