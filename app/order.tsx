import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import Button from "../components/ui/Button";
import { Ionicons } from "@expo/vector-icons";

export default function Order() {
  const router = useRouter();
  const { item } = useLocalSearchParams();
  const coffee =
    typeof item === "string" ? JSON.parse(item) : JSON.parse(item[0]);

  const [deliveryMethod, setDeliveryMethod] = useState<"Delivery" | "Pickup">(
    "Delivery"
  );
  const [quantity, setQuantity] = useState(1);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"Cash" | "Wallet">("Cash");

  const basePrice = parseFloat(coffee.price.replace("$", "")) * quantity;
  const deliveryCost = deliveryMethod === "Delivery" ? 2.5 : 0; // flat fee
  const discount = discountApplied ? 1.5 : 0;
  const total = basePrice + deliveryCost - discount;

  const handleOrder = () => {
  const orderData = {
    coffee: coffee.name,
    image: coffee.image,
    size: coffee.size || "Medium",
    quantity,
    deliveryMethod,
    discountApplied,
    paymentMethod,
    total,
  };

  router.replace({
    pathname: "/trackdelivery",
    params: { order: JSON.stringify(orderData) },
  });
};

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="p-4 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={20} color="gray" />
        </TouchableOpacity>
        <Text className="font-extrabold text-xl">Order</Text>
        <View className="w-6" />
      </View>

      <View className="flex-row bg-gray-100 mx-4 rounded-xl overflow-hidden">
        {["Delivery", "Pickup"].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setDeliveryMethod(option as "Delivery" | "Pickup")}
            className={`flex-1 p-3 ${
              deliveryMethod === option ? "bg-[#C67C4E]" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-center font-SoraMedium ${
                deliveryMethod === option ? "text-white" : "text-black"
              }`}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {deliveryMethod === "Delivery" && (
        <View className="mt-6 px-4">
          <Text className="font-sora-bold text-lg mb-2">Delivery Address</Text>
          <Text className="font-sora-bold text-sm pb-2">Yusuf Lule road</Text>
          <Text className="text-[#797676] text-sm">
            123 Coffee Street, Kampala
          </Text>
          <View className="flex-row py-2 gap-4 mt-2">
            <TouchableOpacity className="border-black px-3 border rounded-full flex-row items-center">
              <Ionicons name="location-outline" size={15} color="#2d2927" />
              <Text className="text-[#2d2927] text-sm ml-2 font-SoraMedium">
                Edit Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-black px-3 border rounded-full flex-row items-center">
              <Ionicons name="pencil-outline" size={15} color="#2d2927" />
              <Text className="text-[#2d2927] text-sm ml-2 font-SoraMedium">
                Add Notes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

       {deliveryMethod !== "Delivery" && (
        <View className="mt-6 px-4">
          <Text className="font-sora-bold text-lg mb-2">Pickup Address</Text>
          <Text className="font-sora-bold text-sm pb-2">Kawempe road</Text>
          <Text className="text-[#797676] text-sm">
            Ben Street, Kampala
          </Text>
          <View className="flex-row py-2 gap-4 mt-2">
            <TouchableOpacity className="border-black px-3 border rounded-full flex-row items-center">
              <Ionicons name="location-outline" size={15} color="#2d2927" />
              <Text className="text-[#2d2927] text-sm ml-2 font-SoraMedium">
                Edit Address
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-black px-3 border rounded-full flex-row items-center">
              <Ionicons name="pencil-outline" size={15} color="#2d2927" />
              <Text className="text-[#2d2927] text-sm ml-2 font-SoraMedium">
                Add Notes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View className="mt-6">
        <View className="flex-row items-center justify-between bg-white shadow p-4 rounded-xl">
          <View className="flex-row items-center">
            <Image
              source={coffee.image}
              className="w-16 h-16 rounded-lg mr-4"
              resizeMode="cover"
            />
            <View>
              <Text className="font-sora-bold text-base">{coffee.name}</Text>
              <Text className="text-gray-400 text-sm">
                {coffee.size || "Medium"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center"
            >
              <Text className="text-lg">-</Text>
            </TouchableOpacity>
            <Text className="font-SoraMedium text-lg">{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center"
            >
              <Text className="text-lg">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="mt-4 px-4">
        <Button
          title={discountApplied ? "Discount Applied" : "1 Discount is Applies"}
          onPress={() => setDiscountApplied((prev) => !prev)}
          variant="outline"
          paddingY="py-3"
          rounded="rounded-xl"
          textStyle="font-SoraMedium text-base"
          containerStyle="w-full"
          leftIcon={
            <Ionicons
              name="pricetag-outline"
              size={20}
              color="rgb(148, 163, 184)"
            />
          }
          rightIcon={
            <Ionicons
              name={
                discountApplied ? "checkmark-outline" : "arrow-forward-outline"
              }
              size={20}
              color="rgb(148, 163, 184)"
            />
          }
        />
      </View>

      <View className="mt-6 px-4 space-y-2">
        <View>
          <Text className="text-lg font-bold pb-2">Payment Summary</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Price</Text>
          <Text className="text-black">${basePrice.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-600">Delivery fee</Text>
          <Text className="text-black">
            {deliveryCost > 0 ? `$${deliveryCost.toFixed(2)}` : "Free"}
          </Text>
        </View>
        {discountApplied && (
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Discount</Text>
            <Text className="text-green-600">- ${discount.toFixed(2)}</Text>
          </View>
        )}
      </View>

      <View className="mt-6 px-4">
        <Text className="font-SoraMedium text-lg mb-2">Payment Method</Text>

        <TouchableOpacity
          onPress={() =>
            setPaymentMethod(paymentMethod === "Cash" ? "Wallet" : "Cash")
          }
          className="flex-row justify-between items-center p-4 rounded-xl border border-gray-300 bg-white"
        >
          <View className="flex-row items-center gap-3">
            <Ionicons
              name={
                paymentMethod === "Cash" ? "cash-outline" : "wallet-outline"
              }
              size={24}
              color="#C67C4E"
            />
            <View>
              <Text className="font-SoraMedium text-base text-black">
                {paymentMethod}
              </Text>
              <Text className="text-gray-600 text-sm">
                Total: ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          <Ionicons name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View className="mt-6 px-4">
        <Button
          title="Order"
          onPress={handleOrder}
          variant="primary"
          paddingX="px-8"
          paddingY="py-4"
          rounded="rounded-xl"
          containerStyle="w-full text-center"
        />
      </View>
    </ScrollView>
  );
}
