import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/ui/Button";

export default function GetStarted() {
  const router = useRouter();

  return (
    <View className="flex-1 font-sora">
      <ImageBackground
        source={require("../../assets/images/onboarding.png")}
        className="flex-1 items-center justify-end"
        resizeMode="cover"
      >
        <Text className="text-[32px] text-white text-center font-semibold">
          Fall in Love with Coffee in Blissful Delight!
        </Text>
      </ImageBackground>
      <View className="flex-2 pb-20 bg-black items-center justify-start px-4">
        <Text className="py-4 text-base text-center text-brand-lightGray ">
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>

        <Button
          title="Get Started"
          onPress={() => router.replace("/(tabs)")}
          variant="primary"
          paddingX="px-8"
          paddingY="py-4"
          rounded="rounded-2xl"
          containerStyle="mt-4 w-full text-center"
        />
      </View>
    </View>
  );
}
