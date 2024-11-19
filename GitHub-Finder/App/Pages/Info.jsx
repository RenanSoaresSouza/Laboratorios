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
      <View className="flex flex-col justify-between h-full">
        <Text className="text-4xl text-center font-bold">{title}</Text>
        <View className="p-4 flex-[0.9] rounded-md border-[#dfdfdf] border px-4">
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
                        className="flex justify-center items-center h-16 w-16 my-3 mr-3 bg-black rounded-full"
                        source={{ uri: item.avatar_url }}
                      />
                    )}
                    <Text
                      className={title == "Seguidores" && "text-black text-md"}
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
          className="bg-red-500 p-2 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-center font-bold text-xl text-white">
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
