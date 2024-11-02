import React from "react";
import { View, Text, Image } from "react-native";
import Search from "./Search";

export default function Profile({ isdata, data, ...props }) {
  return (
    <View className="flex-[2]  flex justify-center items-center w-screen">
      {isdata && (
        <View className="flex flex-col justify-center items-center">
          <View className="h-44 w-44 rounded-full bg-black">
            <Image
              className="h-full w-full rounded-full"
              source={{ uri: data.avatar_url }}
            />
          </View>
          <Text className="text-2xl font-bold">
            {data.name ?? "Não possui usuário"}
          </Text>
          <Text className="text-[#9e9fa3]">
            @{data.login ?? "Não possui Tag"}
          </Text>
        </View>
      )}
      {!isdata && <Search {...props} />}
    </View>
  );
}
