import { Link, useRouter } from 'expo-router';
import { JSX } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const NotFound = (): JSX.Element => {
  const { back } = useRouter();

  return (
    <View style={styles.notFoundScreen}>
      <Text style={styles.title}>Not Found</Text>
      <Text style={styles.subtile}>Could not find requested resource</Text>
      <View style={styles.linkGroup}>
        <Button
          onPress={back}
          title='Return to previous screen'
        />
        <Link href='/'>Go to Home screen</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notFoundScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 700,
    color: '#dc2626',
  },
  subtile: {
    fontSize: 18,
    lineHeight: 27,
  },
  linkGroup: {
    alignItems: 'center',
    gap: 16,
  },
});

export default NotFound;
