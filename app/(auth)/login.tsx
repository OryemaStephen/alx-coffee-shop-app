import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mb-4">Login Page</Text>
      <Button title="Login" onPress={() => router.replace("/(tabs)")} />
      <Button title="Go to Register" onPress={() => router.push("/(auth)/register")} />
    </View>
  );
}
