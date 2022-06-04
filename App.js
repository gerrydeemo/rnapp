import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App ()
{
  return (
    <View style={ styles.container }>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      //https://www.youtube.com/watch?v=iQ_0Fd_N3Mk
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
