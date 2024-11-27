import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import Search from "./Search";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";

export default function Profile({ isSearch, setIsSearch, data, ...props }) {
  return (
    <Animated.View
      entering={FadeInUp}
      className="flex w-screen flex-[2] items-center justify-center"
    >
      {data && isSearch == false && (
        <Animated.View
          entering={FadeInUp}
          className="flex flex-col items-center justify-center"
        >
          <View
            className={
              "flex h-44 w-44 justify-end rounded-full bg-black" +
              " items-center"
            }
          >
            <Image
              className="h-full w-full rounded-full"
              source={{ uri: data.avatar_url }}
            />
            <View className="absolute right-0">
              <Pressable onPress={() => setIsSearch(true)}>
                <View className="flex h-14 w-14 items-center justify-center rounded-xl bg-black">
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
      {!data && <Search {...props} />}
      {isSearch == true ? (
        <Animated.View entering={FadeInUp} className="absolute w-80">
          <Search {...props} />
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}

Profile.propTypes = {
  isSearch: PropTypes.any,
  setIsSearch: PropTypes.func,
  data: PropTypes.object,
};
