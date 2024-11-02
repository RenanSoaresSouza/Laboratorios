import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import Search from "./Search";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Profile({
  issearch,
  setIsSearch,
  isdata,
  data,
  ...props
}) {
  return (
    <Animated.View
      entering={FadeInUp}
      className="flex-[2] flex justify-center items-center w-screen"
    >
      {isdata && issearch == false && (
        <Animated.View
          entering={FadeInUp}
          className="flex flex-col justify-center items-center"
        >
          <View
            className={
              "h-44 w-44 rounded-full bg-black flex justify-end" +
              " items-center"
            }
          >
            <Image
              className="h-full w-full rounded-full"
              source={{ uri: data.avatar_url }}
            />
            <View className="absolute right-0">
              <Pressable onPress={() => setIsSearch(true)}>
                <View className="bg-black w-14 h-14 rounded-xl flex justify-center items-center">
                  <FontAwesome
                    name="search"
                    className="px-4"
                    size={30}
                    color="white"
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <Text className="text-2xl font-bold">
            {data.name ?? "Não possui usuário"}
          </Text>
          <Text className="text-[#9e9fa3]">
            @{data.login ?? "Não possui Tag"}
          </Text>
        </Animated.View>
      )}
      {!isdata && <Search {...props} />}
      {issearch == true ? (
        <Animated.View entering={FadeInUp} className="absolute w-80">
          <Search {...props} />
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}
