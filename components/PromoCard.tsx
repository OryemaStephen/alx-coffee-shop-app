import { View, Text } from "react-native";

export default function PromoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View className="bg-brand-brown rounded-2xl p-6 items-center justify-center">
      <Text className="text-white font-sora-bold text-xl">{title}</Text>
      <Text className="text-white mt-2">{description}</Text>
    </View>
  );
}
