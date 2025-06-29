import { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DummyJSONPost } from '@/src/types';

type Props = { post: DummyJSONPost | null };

export const PostCard = ({ post }: Props): JSX.Element => {
  return (
    <View style={styles.postCard}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text style={styles.body}>{post?.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    paddingInline: 16,
    paddingBlock: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    backgroundColor: '#27272a',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 700,
    color: '#ffffff',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
});
