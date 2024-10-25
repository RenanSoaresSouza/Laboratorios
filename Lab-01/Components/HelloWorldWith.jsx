
import { View, Text } from "react-native";


export const HelloWorldJSX = () => {
    return(
     <View style={{flexDirection:"row"}}>
        <View style={{padding:20,backgroundColor:"#ccc"}}>
            <Text style={{color:'white'}}>Primeira Coluna</Text>
        </View>
        <View style={{padding:20,backgroundColor:"#ccc"}}>
            <Text style={{color:'white'}}>Segunda Coluna</Text>
        </View>
    </View>);
}