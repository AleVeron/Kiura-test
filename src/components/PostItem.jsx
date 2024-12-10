import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const PostItem = ({post}) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  const [commentsSection, setCommentsSection] = useState(true);

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
      setCommentsSection(true)
    }
  };

  return (
    <View style={styles.postContainer}>
      {/* Cabecera de la publicación */}
      <View style={styles.header}>
        <Image source={post.userImage} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.subtitle}>{post.time}</Text>
        </View>
        <FontAwesome6 name="comments" iconStyle="solid" color={'#0000'} />
      </View>

      {/* Contenido de la publicación */}
      <Text style={styles.postContent}>{post.content}</Text>
      {post.image && (
        <Image
          source={post.image}
          style={{width: '100%', height: 200, borderRadius: 10}}
        />
      )}

      {/* Sección de interacciones */}
      <View style={styles.interactionRow}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.iconButton} onPress={handleLike}>
            <FontAwesome6
              name="heart"
              iconStyle="solid"
              color={'#e63946'}
              size={24}
            />
            <Text style={styles.iconText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, {marginStart: 15}]}
            onPress={()=>setCommentsSection(!commentsSection)}>
            <FontAwesome6
              name="comment-dots"
              iconStyle="solid"
              color={'#fff'}
              size={24}
            />
            <Text style={styles.iconText}>{comments.length}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>Sumate</Text>
          <FontAwesome6
            name="bolt"
            iconStyle="solid"
            size={24}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>

      {/* Sección de comentarios */}
      {commentsSection && (
        <FlatList
          data={comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text style={styles.comment}>{item}</Text>}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Escribe un comentario..."
        placeholderTextColor={'#fff'}
        value={newComment}
        onChangeText={setNewComment}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
        <Text style={styles.addButtonText}>Comentar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#1c1c1e',
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  header: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  userImage: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  userInfo: {flex: 1},
  username: {color: '#fff', fontWeight: 'bold', fontSize: 16},
  subtitle: {color: '#999', fontSize: 12},
  postContent: {color: '#e0e0e0', fontSize: 14, marginBottom: 10},
  postImage: {width: '100%', height: 200, borderRadius: 10, marginBottom: 10},
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  iconButton: {flexDirection: 'row', alignItems: 'center'},
  iconText: {color: '#fff', marginLeft: 5},
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e63946',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  joinText: {color: '#fff', marginRight: 5},
  comment: {color: '#999', fontSize: 14, marginVertical: 5},
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#e63946',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  addButtonText: {color: '#fff', textAlign: 'center'},
});

export default PostItem;
