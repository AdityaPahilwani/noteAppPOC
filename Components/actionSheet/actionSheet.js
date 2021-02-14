import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import styles from './style';

const ActionSheet = (props) => {
  const {workflows, handleWorkFlowId, closeModal} = props;
  const RenderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={handleWorkFlowId.bind(this, {id: item.id})}
        style={styles.button}>
        <Text style={styles.buttonText}>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={closeModal} style={styles.backdrop}></Pressable>

      <View style={styles.actionContainer}>
        <Text style={styles.workFlowText}>Select workflows</Text>
        <FlatList
          data={workflows}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          renderItem={RenderItem}
        />
      </View>
    </View>
  );
};

export default ActionSheet;
