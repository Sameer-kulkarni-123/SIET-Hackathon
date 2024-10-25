import { Stack } from "expo-router";

import { useFonts } from 'expo-font';


export default function RootLayout(){

  const [fontsLoaded, error] = useFonts({
    "RobotoMonoBold": require("../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMonoBoldItalic": require("../assets/fonts/RobotoMono-BoldItalic.ttf"),
    "RobotoMonoExtraLight": require("../assets/fonts/RobotoMono-ExtraLight.ttf"),
    "RobotoMonoExtraLightItalic": require("../assets/fonts/RobotoMono-ExtraLightItalic.ttf"),
    "RobotoMonoItalic": require("../assets/fonts/RobotoMono-Italic.ttf"),
    "RobotoMonoLight": require("../assets/fonts/RobotoMono-Light.ttf"),
    "RobotoMonoLightItalic": require("../assets/fonts/RobotoMono-LightItalic.ttf"),
    "RobotoMonoMedium": require("../assets/fonts/RobotoMono-Medium.ttf"),
    "RobotoMonoMediumItalic": require("../assets/fonts/RobotoMono-MediumItalic.ttf"),
    "RobotoMonoRegular": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMonoSemiBold": require("../assets/fonts/RobotoMono-SemiBold.ttf"),
    "RobotoMonoSemiBoldItalic": require("../assets/fonts/RobotoMono-SemiBoldItalic.ttf"),
    "RobotoMonoThin": require("../assets/fonts/RobotoMono-Thin.ttf"),
    "RobotoMonoThinItalic": require("../assets/fonts/RobotoMono-ThinItalic.ttf"),
});

  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false,}}/>
      <Stack.Screen name="(auth)" options={{headerShown: false,}}/>
    </Stack>
  );
}
