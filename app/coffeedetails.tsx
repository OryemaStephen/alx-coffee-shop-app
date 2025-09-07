import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import Button from "../components/ui/Button";

export default function CoffeeDetails() {
  const router = useRouter();
  const { item } = useLocalSearchParams();
  const coffee =
    typeof item === "string" ? JSON.parse(item) : JSON.parse(item[0]);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const sizes = ["S", "M", "L"];

  // Static long description
  const longDescription = `
    This ${coffee.name} is crafted with the finest beans, sourced from sustainable farms. It offers a rich, full-bodied flavor with notes of chocolate, caramel, and a hint of citrus. Perfect for any time of day, this coffee is roasted to perfection to bring out its unique characteristics. Enjoy it hot or iced, tailored to your preference.
  `;

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4 flex-row justify-between items-center">
        <TouchableOpacity
          className="px-3 py-2 rounded-full flex-row items-center"
          onPress={() => router.back()}
        >
          <FontAwesome name="arrow-left" size={20} color="gray" />
        </TouchableOpacity>
        <View className="px-2 py-1 rounded-tr-xl rounded-bl-3xl flex-row items-center">
          <Text className="font-bold text-lg">Detail</Text>
        </View>
        <View className="px-2 py-1 rounded-tr-xl rounded-bl-3xl flex-row items-center">
          <FontAwesome name="heart" size={20} color="gray" />
        </View>
      </View>

      <View className="px-4">
        <Image
          source={coffee.image}
          className="w-full h-64 rounded-2xl"
          resizeMode="cover"
        />
      </View>

      <View className="p-4">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="font-SoraBold text-2xl text-[#111111]">
              {coffee.name}
            </Text>

            <Text className="text-base text-[#A2A2A2] mt-1">
              {coffee.description}
            </Text>
            <View className="py-2 flex-row items-center">
              <FontAwesome name="star" size={20} color="#FFD700" />
              <Text className="text-black ml-1">{coffee.rating}</Text>
              <Text className="text-slate-400 text-xs ml-1">(230)</Text>
            </View>
          </View>
          <View className="flex flex-row justify-end items-center gap-4">
            <Image
              source={require("../assets/images/bike.png")}
              className="w-12 h-auto rounded-2xl bg-slate-50 p-6"
              resizeMode="cover"
            />
            <Image
              source={require("../assets/images/leaf.png")}
              className="w-8 h-auto rounded-2xl bg-slate-50 p-6"
              resizeMode="cover"
            />
            <Image
              source={require("../assets/images/box.png")}
              className="w-8 h-auto rounded-2xl bg-slate-50 p-6"
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="mt-4">
          <Text className="font-SoraMedium text-lg text-[#111111] mb-2">
            Description
          </Text>
          <Text className="text-base text-justify text-[#A2A2A2]">
            {longDescription.trim()}
          </Text>
        </View>

        <View className="mt-4">
          <Text className="font-SoraMedium text-lg text-[#111111] mb-2">
            Size
          </Text>
          <View className="flex-row justify-between gap-2">
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                className={`flex-1 p-3 rounded-xl border ${
                  selectedSize === size
                    ? "text-brand-brown bg-[#F9F2ED] border-brand-brown"
                    : "bg-white border-[#A2A2A2]"
                }`}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  className={`text-center font-SoraMedium ${
                    selectedSize === size
                      ? "text-brand-brown"
                      : "text-[#111111]"
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-6">
          <View>
            <Text className="text-[#A2A2A2] text-sm">Price</Text>
            <Text className="font-SoraBold text-xl text-[#C67C4E]">
              {coffee.price}
            </Text>
          </View>
          <Button
            title="Buy Now"
            onPress={() =>
              router.push({
                pathname: "/order",
                params: {
                  item: JSON.stringify({ ...coffee, size: selectedSize }),
                },
              })
            }
            variant="primary"
            paddingX="px-6"
            paddingY="py-3"
            rounded="rounded-xl"
            containerStyle="w-1/2"
          />
        </View>
      </View>
    </ScrollView>
  );
}
