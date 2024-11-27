import { View } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileInfo from "./Components/Info/Profileinfo";
import Reset from "./Components/Reset";
import Profile from "./Components/Profile/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Infos from "./Pages/Info";

function HomeScreen() {
  const [search, setSearch] = useState("");
  const [isValid, setIsValid] = useState();
  const [data, setData] = useState();
  const [issearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (isValid == true) {
      fetch(`https://api.github.com/users/${search}`, {})
        .then((result) => result.json())
        .then((resp) => {
          if (verifyInvalid(resp) == true) {
            setIsValid();
            alert("Usuário não encontrado");
          } else {
            setData(resp);
          }
        })
        .catch((err) => alert(err));
      setIsValid();
      setIsSearch(false);
      console.log("teste");
    }
  }, [isValid]);

  function HandleSubmit() {
    if (search?.length <= 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  function handleReset() {
    setIsValid();
    setData();
    setSearch("");
    setIsSearch(false);
  }

  function verifyInvalid(resp) {
    if (resp?.status == 404) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <View className="flex h-screen w-screen flex-col items-center bg-[#f7f8fc]">
      <Profile
        isSearch={issearch}
        setIsSearch={setIsSearch}
        data={data}
        onChange={setSearch}
        onSubmit={HandleSubmit}
        valid={isValid}
        isValid={isValid}
      />
      {data && <ProfileInfo data={data} />}
      {data && <Reset onClick={handleReset} />}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Info"
          component={Infos}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
