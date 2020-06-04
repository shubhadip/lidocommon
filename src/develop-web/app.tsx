import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LidoAppText from '../LidoAppText/index.web';

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});


class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <LidoAppText />
      </View>
    );
  }
}

export default App;
