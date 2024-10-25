import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <>
    <View className=" mt-48 items-center justify-center">
          <Text className="text-center font-rbold text-5xl ">
            Sign In
          </Text>
    </View>
        
      <View
        className=" mt-20 justify-center items-center"
      >
          

        <View className="">
          <TouchableOpacity className="bg-yellow-500 rounded-3xl justify-center items-center">
            <Link href="nothing" className="py-2 px-3 mt-2 text-purple-500 text-lg mb-2 font-rbolditalic">This link takes you nowhere</Link>
          </TouchableOpacity>

        </View>

      </View>
  </>
   
  );
}
