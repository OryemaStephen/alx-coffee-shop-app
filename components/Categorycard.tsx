import { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { CategoryProps } from "../interfaces";

const categories = [
  { id: "0", name: "All" },
  { id: "1", name: "Espresso" },
  { id: "2", name: "Latte" },
  { id: "3", name: "Cappuccino" },
  { id: "4", name: "Americano" },
  { id: "5", name: "Mocha" },
  { id: "6", name: "Flat White" },
];

const CategoryCard = ({ item, isActive, onPress }: { item: CategoryProps, isActive: boolean, onPress: () => void }) => (
  <TouchableOpacity
    className={`rounded-lg p-2 mx-2 min-w-[70px] items-center ${isActive ? "bg-brand-brown" : "bg-[#f5f5f5]"}`}
    onPress={onPress}
  >
    <Text className="text-[#111111] font-semibold">{item.name}</Text>
  </TouchableOpacity>
);

export default function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("0"); // Default to "All"

  return (
    <View className="py-4">
      <Text className="text-lg font-bold text-[#111111] mb-3 px-4">
        Categories
      </Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            isActive={item.id === activeCategory}
            onPress={() => setActiveCategory(item.id)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
      />
    </View>
  );
}