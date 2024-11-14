import { Text, View, Pressable } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Infos({ navigation, route }) {
  const { title, data } = route.params;

  return (
    <View className="h-full p-8">
      <View>
        <Text>{title}</Text>
        <Text>{data}</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

Infos.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};
