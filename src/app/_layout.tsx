import { Stack } from 'expo-router';
import { JSX } from 'react';

const Layout = (): JSX.Element => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='+not-found'
        options={{ title: 'Not Found' }}
      />
      <Stack.Screen
        name='posts/[id]/index'
        options={({ route }) => ({
          title: `Post ${(route.params as { id: string }).id}`,
        })}
      />
    </Stack>
  );
};

export default Layout;
