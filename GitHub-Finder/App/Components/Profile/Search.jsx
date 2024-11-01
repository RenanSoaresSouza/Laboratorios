import { Text, View, TextInput, Pressable } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
                                              //mude de full para fit
let style = "p-2 rounded-xl border-2 bg-black w-full flex flex-row justify-around items-center"
export default function Search({onSubmit,onChange,isvalid}) {


  //REMONEIE ESSE ARQUIVO PARA PROFILE

  //FAÇA A BARRA DE PESQUISA E DE PERFIL NO MESMO COMPONENTE (COMPONENTIZANDO AMBOS)

  return (
    <View >
      <View className={style}>
        <TextInput
          onChangeText={(text) => onChange(text)}
          placeholder="Pesquise Um Usuário do GitHub"
          placeholderTextColor={isvalid == false ? "red":"gray"}
          className="h-10 text-white flex-[0.9] rounded-sm"
        />

        <FontAwesome
          onPress={onSubmit}
          name="search"
          className="px-4"
          size={30}
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
