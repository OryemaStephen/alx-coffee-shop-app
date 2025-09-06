import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl mb-4">Register Page</Text>

      {/* In a real app, add TextInput fields here for email, password, etc. */}
      <Button title="Register" onPress={() => router.replace("/(tabs)")} />

      <Button
        title="Back to Login"
        onPress={() => router.replace("/(auth)/login")}
      />
    </View>
  );
}
