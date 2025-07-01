import { Stack } from 'expo-router';
import { JSX } from 'react';

const Layout = (): JSX.Element => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: 'Home' }}
      />
    </Stack>
  );
};

export default Layout;
