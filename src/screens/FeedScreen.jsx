import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PostItem from '../components/PostItem';
import { posts } from '../data/posts';
import Header from '../components/Header';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
});

export default FeedScreen;