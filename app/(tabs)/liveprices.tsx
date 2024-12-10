import { View, Text, StyleSheet } from 'react-native';

export default function LivePrices() {
  return (
    <View style={styles.container}>
        <Text>liveprices</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });