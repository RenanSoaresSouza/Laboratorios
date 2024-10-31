import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "./Components/Search";
import ProfileInfo from "./Components/Profileinfo";
import Reset from "./Components/Reset";

export default function App() {
  const [search, setSearch] = useState("");
  const [isvalid, setIsValid] = useState();

  useEffect(()=>{
    if (isvalid == true){
      alert('Pesquisa Por Api')
      setIsValid()
    }
    
  },[isvalid])
  
  function HandleSubmit() {
    if (search?.length <= 0) {
      setIsValid(false);
    } else {
      setIsValid(true);

    }
  }

  return (
    <View className="bg-[#f7f8fc] w-screen h-screen flex flex-col items-center">
      <Search onChange={setSearch} onSubmit={HandleSubmit} isvalid={isvalid} />
      
    </View>
  );
}
