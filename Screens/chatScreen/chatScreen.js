import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './style';
const ChatScreen = (props) => {
  const {
    token,
    repoName,
    selectedWorkflowDetails: workflowId,
  } = props.route.params;
  const [input, setInput] = useState();
  const [data, setData] = useState([]);
  const handleMessageChange = (text) => {
    setInput(text);
  };
  const pusbContent = async () => {
    setData((data) => [...data, {text: input}]);
    const raw = JSON.stringify({"ref": "master", "inputs": {data: input}});
    const myHeaders = new Headers();
    myHeaders.append('authorization', `Bearer ${token}`);
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    console.log(
      `https://api.github.com/repos/${repoName}/actions/workflows/${workflowId}/dispatches`,
    );
    let res = await fetch(
      `https://api.github.com/repos/${repoName}/actions/workflows/${workflowId}/dispatches`,
      requestOptions,
    );
    res = await res.json();
    console.log(res);
  };

  const RenderItem = ({item, index}) => {
    const isAdmin = true;
    const isAdminStyle = isAdmin
      ? styles.messageWrapperForAdmin
      : styles.messageWrapperForUser;
    return (
      <View style={isAdminStyle}>
        <View style={styles.card}>
          <Text style={styles.chatText}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 10}}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={10}
        renderItem={RenderItem}
      />
      <View style={styles.textInputArea}>
        <TextInput
          value={input}
          placeholder={'Enter your message'}
          style={styles.textInput}
          onChangeText={handleMessageChange}
        />
        <Pressable onPress={pusbContent}>
          <View style={styles.sendButton}></View>
        </Pressable>
      </View>
    </View>
  );
};
export default ChatScreen;
