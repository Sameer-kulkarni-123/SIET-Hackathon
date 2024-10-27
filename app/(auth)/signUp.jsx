import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View, SafeAreaView, StatusBar } from "react-native";
import CustomButton from "../../components/CustomButton123";
import FormField from "../../components/FormField123";
import { useState } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import { Alert } from 'react-native';

export default function Index() {

  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const createProfile = async (response) => {
    db.ref(`/users/${response.user.uid}`).set({ email: response.user.email });
  }

  const submit = async () => {
    if(form.email && form.password){
      try{
        const response = await auth().createUserWithEmailAndPassword(
          form.email,
          form.password
        )
        
        if(response.user){
          await createProfile(response);
          router.push("/(tabs)/home");
          
        }

      }
      catch (error) {
        // Capture specific Firebase errors for better error messages
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
      <View className="mt-48 items-center justify-center">
        <Text className="text-center font-rbold text-5xl ">
          Sign Up
        </Text>
      </View>

      <View className="mt-16">
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
          title="Sign Up"
          containerStyles="bg-[#816EB4] rounded-2xl"
          textStyles="px-7 py-4 text-2xl font-rmedium"
        />
        <View className="flex-row mt-5">
          <Text className="font-rregular text-[16px]">Already have a account? </Text>
          <Link href="signIn" className="font-rbold text-[16px]">Sign In</Link>
        </View>
      </View>
      <StatusBar barStyle="dark-content"/>
    </SafeAreaView>
  );
}
