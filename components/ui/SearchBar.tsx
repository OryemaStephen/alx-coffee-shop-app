import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search",
}: {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}) {
  return (
    <View className="w-full">
      <View className="bg-[#111111] rounded-2xl p-4 mb-8 shadow">
        <View className="flex-col justify-between mb-3">
          <Text className="text-[#A2A2A2] pb-3">Location </Text>
          <View className="flex-row items-center pb-2">
            <Ionicons name="location-outline" size={18} color="#C67C4E" />
            <Text className="ml-1 font-sora-bold text-white text-base">
              Kampala, Uganda
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#555"
              className="ml-1"
            />
          </View>
        </View>

        <View className="flex-row items-center justify-between gap-3">
          <View className="flex-row items-center flex-1 bg-[#313131] rounded-xl px-3 py-2">
            <Ionicons name="search" size={18} color="#A2A2A2" />
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              placeholderTextColor="#A2A2A2"
              className="flex-1 ml-2 text-base text-white"
            />
          </View>
          <TouchableOpacity
            className="bg-[#C67C4E] p-3 rounded-xl"
            onPress={() => alert("Filter pressed")}
          >
            <Ionicons name="filter" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
