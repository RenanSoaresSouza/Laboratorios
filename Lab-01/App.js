import { HelloWorld } from './Components/HelloWorldWithoutJSX';
import { StyleSheet, Text, View } from 'react-native';

export default function main() {
  return (
    <View style={styles.container}>
      <HelloWorld />
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
