import { Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
let style = "p-2 rounded-md border-2 bg-black w-11/12 flex flex-row justify-around items-center"
export default function Search({onSubmit,onChange,isvalid}) {


  //REMONEIE ESSE ARQUIVO PARA PROFILE

  //FAÇA A BARRA DE PESQUISA E DE PERFIL NO MESMO COMPONENTE (COMPONENTIZANDO AMBOS)

  return (
    <View className="flex-[2] flex justify-center">
      <View className={style}>
        <TextInput
          onChangeText={(text) => onChange(text)}
          placeholder="Pesquise Um Usuário do GitHub"
          placeholderTextColor={isvalid == false ? "red":"gray"}
          className="h-10 text-white flex-[0.9] rounded-sm "
        />

        <FontAwesome
          onPress={onSubmit}
          name="search"
          className="px-4"
          size={24}
          color={isvalid == false ? "red" : "white"}
        />
      </View>
      {(isvalid == false) && (
        <Text className=" text-red-500 font-medium">
          O usuário não pode ser vazio
        </Text>
      )}
    </View>
  );
}
