import { View, Text, Image, TouchableOpacity } from "react-native";
import { Coffee } from "../interfaces";
import Button from "./ui/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CoffeeCard({
  item,
}: {
  item: Coffee;
}) {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="bg-white rounded-2xl w-44 overflow-hidden"
      onPress={() => router.push({ pathname: "/coffeedetails", params: { item: JSON.stringify(item) } })}
    >
      <View className="relative">
        <Image source={item.image} className="w-full h-auto" resizeMode="contain" />
        <View className="absolute top-0 right-2 bg-black/20 px-2 py-1 rounded-tr-xl rounded-bl-3xl flex-row items-center">
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text className="text-white text-xs ml-1">{item.rating}</Text>
        </View>
      </View>

      <Text className="font-sora-bold px-2 text-lg">{item.name}</Text>
      <Text className="text-sm px-2 text-gray-500">{item.description}</Text>

      <View className="flex px-2 py-2 flex-row justify-between items-center">
        <Text className="text-lg font-sora-bold">{item.price}</Text>
        <Button
          title="+"
          onPress={() => router.push({ pathname: "/order", params: { item: JSON.stringify(item) } })}
          variant="primary"
          paddingX="px-3"
          paddingY="py-1"
          rounded="rounded-md"
          containerStyle="w-fit text-center"
        />
      </View>
    </TouchableOpacity>
  );
}