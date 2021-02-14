import React, {useState, useEffect, useCallback} from 'react';
import {TextInput, View, Pressable, Text, Modal} from 'react-native';
import ActionSheet from '../../Components/actionSheet/actionSheet';
import styles from './style';

const LoginScreen = (props) => {
  const [token, setToken] = useState();
  const [repoName, setRepoName] = useState();
  const [workflows, setWorkflows] = useState([]);
  const [selectedWorkflowDetails, setSelectedWorkflowDetails] = useState(); // not sure if it goes obj someday
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleTokenChange = (text) => {
    setToken(text);
  };
  const handleRepoNameChange = (text) => {
    setRepoName(text);
  };
  const getWorkflows = async () => {
    const myHeaders = new Headers();
    myHeaders.append('authorization', 'Bearer ' + token);
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    let res = await fetch(
      `https://api.github.com/repos/${repoName}/actions/workflows`,
      requestOptions,
    );
    res = await res.json();
    setWorkflows(res.workflows);
    console.log(res.workflows);
    setModalVisible(true);
  };

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, [modalVisible]);

  const handleWorkFlowId = useCallback(
    ({id}) => {
      setSelectedWorkflowDetails(id);
      closeModal();
      props.navigation.navigate('Chat', {
        token: token,
        repoName: repoName,
        selectedWorkflowDetails: id,
      });
    },
    [workflows, selectedWorkflowDetails, modalVisible],
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <ActionSheet
          workflows={workflows}
          handleWorkFlowId={handleWorkFlowId}
          closeModal={closeModal}
        />
      </Modal>
      <TextInput
        style={styles.textInput}
        value={token}
        placeholder="Github token "
        multiline={true}
        onChangeText={handleTokenChange}
      />
      <TextInput
        style={styles.textInput}
        value={repoName}
        placeholder="Repo name"
        multiline={true}
        onChangeText={handleRepoNameChange}
      />
      <Pressable style={styles.submitButton} onPress={getWorkflows}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
//7dc687ffb18ad3e86edd4fae7e1b0ac631a71aa0
