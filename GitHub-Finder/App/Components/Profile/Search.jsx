import { View, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import PropTypes from "prop-types";

export default function Search({ onSubmit, onChange, isValid }) {
  return (
    <View>
      <View
        className={
          "flex w-full flex-row items-center justify-around rounded-xl border-2 bg-black p-2 transition-all duration-1000 ease-linear"
        }
      >
        <TextInput
          onChangeText={(text) => onChange(text)}
          placeholder={
            isValid == false
              ? "o Usuário não pode ser Vazio"
              : "Pesquise Um Usuário do GitHub"
          }
          placeholderTextColor={isValid == false ? "red" : "gray"}
          className="h-10 flex-[0.9] rounded-sm text-white"
        />

        <FontAwesome
          onPress={onSubmit}
          name="search"
          className="px-4"
          size={30}
          color={isValid == false ? "red" : "white"}
        />
      </View>
    </View>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
};
