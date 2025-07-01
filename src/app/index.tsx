import { JSX, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { PostCard } from '../components';
import type { DummyJsonPost } from '../types';

const Screen = (): JSX.Element => {
  const [posts, setPosts] = useState<DummyJsonPost[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://dummyjson.com/posts?limit=0&select=id,title,body'
      );

      const data: { posts: DummyJsonPost[] } = await response.json();

      setPosts(data.posts);
    })();
  }, []);

  return (
    <View style={styles.homeScreen}>
      <FlatList
        data={posts}
        renderItem={({ item: post }) => <PostCard post={post} />}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        keyExtractor={(post) => post.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: { flex: 1 },
  listSeparator: { height: 16 },
});

export default Screen;
