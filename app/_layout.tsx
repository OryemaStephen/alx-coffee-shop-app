// import { Stack } from "expo-router";
// import {
//   useFonts,
//   Sora_400Regular,
//   Sora_500Medium,
//   Sora_700Bold,
// } from "@expo-google-fonts/sora";
// import { Text } from "react-native";
// import "../global.css";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     SoraRegular: Sora_400Regular,
//     SoraMedium: Sora_500Medium,
//     SoraBold: Sora_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <SafeAreaView className="flex-1">
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="splash" />
//         <Stack.Screen name="(auth)" />
//         <Stack.Screen name="(tabs)" />
//       </Stack>
//     </SafeAreaView>
//   );
// }
// app/_layout.tsx
import { Stack } from "expo-router";
import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_700Bold,
} from "@expo-google-fonts/sora";
import { Text } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SoraRegular: Sora_400Regular,
    SoraMedium: Sora_500Medium,
    SoraBold: Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="coffeedetails" />
        <Stack.Screen name="order" />
        <Stack.Screen name="trackdelivery" />
      </Stack>
    </SafeAreaView>
  );
}
