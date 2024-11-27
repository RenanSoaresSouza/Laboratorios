import { Text, View, Pressable, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Infos({ navigation, route }) {
  const { title, data } = route.params;
  const [info, setInfo] = useState();

  useEffect(() => {
    // if (title !== "Bio") {
    //   fetch(data).then();
    // }
    fetch(data)
      .then((resp) => resp.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <View className="h-full bg-[#f7f8fc] p-8">
      <View className="flex h-full flex-col justify-between">
        <Text className="text-center text-4xl font-bold">{title}</Text>
        <View className="flex-[0.9] rounded-md border border-[#dfdfdf] bg-white p-4 px-4">
          <ScrollView className="h-full">
            {data !== null ? (
              title == "Bio" ? (
                <Text>{data}</Text>
              ) : info?.length == 0 ? (
                <Text>Este usuário não possui {title}</Text>
              ) : (
                info?.map((item, index) => (
                  <View key={index} className="flex flex-row items-center">
                    {title == "Orgs" && (
                      <Ionicons
                        name="headset-outline"
                        size={15}
                        color="black"
                      />
                    )}
                    {title == "Repositórios" && (
                      <MaterialCommunityIcons
                        name="file-document-outline"
                        size={24}
                        color="black"
                      />
                    )}
                    {title == "Seguidores" && (
                      <Image
                        className="my-3 mr-3 flex h-16 w-16 items-center justify-center rounded-full bg-black"
                        source={{ uri: item.avatar_url }}
                      />
                    )}
                    <Text
                      className={title == "Seguidores" && "text-md text-black"}
                    >
                      {item.full_name || item.login}
                    </Text>
                  </View>
                ))
              )
            ) : (
              <Text>Este usuário não possui {title}</Text>
            )}
          </ScrollView>
        </View>
        <Pressable
          className="rounded-full bg-red-500 p-2"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-center text-xl font-bold text-white">
            Voltar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

Infos.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};
