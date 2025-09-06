import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // check auth status here (replace with real logic)
      const isLoggedIn = false;
      if (isLoggedIn) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">My App</Text>
      <ActivityIndicator size="large" className="mt-4" />
    </View>
  );
}
