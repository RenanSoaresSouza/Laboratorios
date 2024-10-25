import { HelloWorld } from './Components/HelloWorldWithoutJSX';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorldJSX } from './Components/HelloWorldWith';

export default function main() {
  return (
    <View style={styles.container}>
      <HelloWorld />
      <HelloWorldJSX />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
