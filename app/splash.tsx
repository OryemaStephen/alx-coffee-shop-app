import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const isLoggedIn = false;

        const timer = setTimeout(() => {
          if (isLoggedIn) {
            router.replace("/(tabs)");
          } else {
            router.replace("/");
          }
        }, 2000);

        return () => clearTimeout(timer);
      } catch (error) {
        router.replace("/(auth)/get-started");
      }
    };

    checkAuthStatus();
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">My Coffee Shop</Text>
      <ActivityIndicator size="large" color="#C67C4E" className="mt-4" />
    </View>
  );
}