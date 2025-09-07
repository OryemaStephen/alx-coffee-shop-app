import { useState } from "react";
import { View, ScrollView, ImageBackground, Text } from "react-native";
import SearchBar from "../../components/ui/SearchBar";
import CoffeeCard from "../../components/CoffeeCard";
import { coffeeItems } from "../../constants/data";
import CategoryList from "../../components/Categorycard";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="bg-[#111111] justify-center items-center py-10">
        <SearchBar value={search} onChange={setSearch} />
      </View>
      <View className="px-4 rounded-lg">
        <ImageBackground
          source={require("../../assets/images/banner.png")}
          className="w-full h-28 rounded-2xl -mt-14 mb-6"
          resizeMode="cover"
          style={{ zIndex: 10, borderRadius: 20 }}
        >
            <Text className="text-white max-w-20 bg-[#BBBBBB] text-center font-bold text-lg px-2 py-1 rounded-md m-2">
            Promo
          </Text>
        </ImageBackground>
      </View>
      <View className="p-4">
        <CategoryList />
        <View className="flex-row flex-wrap justify-center gap-4">
          {coffeeItems.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}