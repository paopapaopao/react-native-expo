import { useLocalSearchParams } from 'expo-router';
import { JSX, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { PostCard } from '@/src/components';
import type { DummyJsonPost } from '@/src/types';

const Screen = (): JSX.Element => {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<DummyJsonPost | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data: DummyJsonPost = await response.json();

      setPost(data);
    })();
  }, []);

  return (
    <View style={styles.postDetailsScreen}>
      <PostCard post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  postDetailsScreen: { flex: 1 },
});

export default Screen;
