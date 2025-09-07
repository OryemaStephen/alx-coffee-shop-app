import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";

export default function TrackDelivery() {
  const router = useRouter();
  const { order } = useLocalSearchParams();
  const orderData =
    typeof order === "string" ? JSON.parse(order) : JSON.parse(order[0]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="gray" />
        </TouchableOpacity>
        <Text className="font-extrabold text-xl">Track Delivery</Text>
        <View className="w-6" />
      </View>

      <View className="mt-4 px-4">
        <View className="flex-row items-center bg-gray-100 p-4 rounded-xl mt-2">
          <Image
            source={orderData.image}
            className="w-16 h-16 rounded-lg mr-4"
            resizeMode="cover"
          />
          <View>
            <Text className="font-SoraBold text-base">{orderData.coffee}</Text>
            <Text className="text-gray-500 text-sm">
              {orderData.size} • x{orderData.quantity}
            </Text>
            <Text className="text-[#C67C4E] font-bold">
              ${orderData.total.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-6 px-4 items-center">
        <Text className="text-gray-600">Estimated Time</Text>
        <Text className="font-SoraBold text-2xl text-[#C67C4E]">15 mins</Text>

        <View className="flex-row gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((step, idx) => (
            <View
              key={idx}
              className={`h-2 w-8 rounded-full ${
                step <= 3 ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>

      <View className="mt-8 px-4">
        <View className="bg-[#F9F2ED] p-6 rounded-2xl items-center">
          <Ionicons name="bicycle-outline" size={40} color="#C67C4E" />
          <Text className="mt-3 font-SoraMedium text-lg text-gray-700">
            Your order is on the way!
          </Text>
          <Text className="text-sm text-gray-500 text-center mt-1">
            Sit tight, our courier is bringing your coffee shortly ☕
          </Text>
        </View>
      </View>

      <View className="mt-8 px-4 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-5">
          <Image
            source={require("../assets/images/profile.png")}
            className="w-20 h-20 rounded-full"
          />
          <View>
            <Text className="font-SoraBold text-lg">Alex Carter</Text>
            <Text className="text-gray-500">Delivery Courier</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity className=" p-1 border rounded-xl">
            <Ionicons name="call" size={25} color="#2d2927" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
