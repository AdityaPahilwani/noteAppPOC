import React, {useState, useEffect, useCallback} from 'react';
import {AppRegistry, Text, View, Image, Button} from 'react-native';
import ShareMenu, {ShareMenuReactView} from 'react-native-share-menu';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import StackContainer from './Navigation/navigation';
const App = () => {
  const [sharedData, setSharedData] = useState(null);
  const [sharedMimeType, setSharedMimeType] = useState(null);

  const handleShare = useCallback((item) => {
    if (!item) {
      return;
    }

    const {mimeType, data, extraData} = item;

    setSharedData(data);
    setSharedMimeType(mimeType);
    // You can receive extra data from your custom Share View
    console.log(item);
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, []);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, []);

  if (!sharedMimeType && !sharedData) {
    // The user hasn't shared anything yet
    // return <Text>Works</Text>;
  }

  if (sharedMimeType === 'text/plain') {
    // The user shared text
    // return (
    //   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //     <Text dataDetectorType='all' style={{fontSize:24,}}>Shared text: {sharedData}</Text>
    //   </View>
    // );
  }

  // The user shared a file in general
  return (
    <NavigationContainer>
      <StackContainer />
    </NavigationContainer>
  );
};

export default App;
